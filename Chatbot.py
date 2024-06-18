import json
import random
from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline, AutoModelForSeq2SeqLM, AutoTokenizer
from datetime import datetime, timedelta
from flask_httpauth import HTTPBasicAuth
from werkzeug.security import generate_password_hash, check_password_hash
import threading
import time

# Load intents file
with open('intents.json') as file:
    intents = json.load(file)

# Load pre-trained models and tokenizers
chatbot_model_name = "microsoft/DialoGPT-medium"
chatbot = pipeline("conversational", model=chatbot_model_name)

sentiment_analyzer = pipeline("sentiment-analysis")

translation_model_name = "Helsinki-NLP/opus-mt-en-de"
translator = pipeline("translation_en_to_de", model=translation_model_name)

app = Flask(__name__)
CORS(app)

# User session, profile, and feedback storage
user_sessions = {}
user_profiles = {}
user_feedback = {}

# User authentication setup
auth = HTTPBasicAuth()
users = {
    "admin": generate_password_hash("adminpassword"),
    "user1": generate_password_hash("user1password")
}

@auth.verify_password
def verify_password(username, password):
    if username in users and check_password_hash(users.get(username), password):
        return username
    return None

def get_intent(user_input):
    for intent in intents['intents']:
        if any(pattern in user_input.lower() for pattern in intent['patterns']):
            return intent
    return None

def analyze_sentiment(user_input):
    result = sentiment_analyzer(user_input)[0]
    return result['label'], result['score']

def log_interaction(user_id, user_input, bot_response):
    log_entry = f"User: {user_input}\nBot: {bot_response}\n\n"
    if user_id in user_sessions:
        user_sessions[user_id].append(log_entry)
    else:
        user_sessions[user_id] = [log_entry]

def get_greeting():
    current_hour = datetime.now().hour
    if current_hour < 12:
        return "Good morning!"
    elif current_hour < 18:
        return "Good afternoon!"
    else:
        return "Good evening!"

def handle_special_commands(user_input, user_id):
    if user_input == "/help":
        return "Here are some things you can ask me:\n- What's the weather like?\n- Tell me a joke.\n- Give me some advice."
    elif user_input == "/reset":
        user_sessions[user_id] = []
        return "Your session has been reset."
    elif user_input.startswith("/setlang"):
        _, lang = user_input.split(" ")
        user_profiles[user_id]["language"] = lang
        return f"Language set to {lang}."
    elif user_input.startswith("/setpref"):
        _, pref = user_input.split(" ", 1)
        user_profiles[user_id]["preferences"].append(pref)
        return f"Preference '{pref}' added."
    # Add more commands as needed
    return None

def translate_text(text, target_lang):
    if target_lang == "de":
        translation = translator(text)[0]['translation_text']
        return translation
    return text  # Add more language support as needed

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_id = data.get("user_id")
    user_input = data.get("message")

    if user_id not in user_sessions:
        user_profiles[user_id] = {"language": "en", "preferences": []}
        user_feedback[user_id] = []
        greeting = get_greeting()
        user_sessions[user_id] = [greeting]
    else:
        greeting = None

    special_response = handle_special_commands(user_input, user_id)
    if special_response:
        bot_response = special_response
    else:
        intent = get_intent(user_input)
        if intent:
            bot_response = random.choice(intent['responses'])
        else:
            bot_response = chatbot(user_input)[0]['generated_text']

    # Translate bot response if necessary
    user_lang = user_profiles[user_id]["language"]
    if user_lang != "en":
        bot_response = translate_text(bot_response, user_lang)

    # Analyze sentiment
    sentiment, confidence = analyze_sentiment(user_input)

    # Log the interaction
    log_interaction(user_id, user_input, bot_response)

    response = {
        "response": bot_response,
        "sentiment": sentiment,
        "confidence": confidence
    }

    if greeting:
        response["greeting"] = greeting

    return jsonify(response)

@app.route("/logs/<user_id>", methods=["GET"])
@auth.login_required
def get_logs(user_id):
    if user_id in user_sessions:
        logs = "\n".join(user_sessions[user_id])
    else:
        logs = "No logs found for this user."
    return logs

@app.route("/admin/users", methods=["GET"])
@auth.login_required
def list_users():
    return jsonify(list(user_profiles.keys()))

@app.route("/admin/logs", methods=["GET"])
@auth.login_required
def get_all_logs():
    all_logs = {user_id: "\n".join(logs) for user_id, logs in user_sessions.items()}
    return jsonify(all_logs)

@app.route("/admin/reset", methods=["POST"])
@auth.login_required
def reset_all_sessions():
    user_sessions.clear()
    user_profiles.clear()
    return "All sessions have been reset.", 200

@app.route("/feedback", methods=["POST"])
def feedback():
    data = request.json
    user_id = data.get("user_id")
    feedback_text = data.get("feedback")

    if user_id in user_feedback:
        user_feedback[user_id].append(feedback_text)
    else:
        user_feedback[user_id] = [feedback_text]

    return "Feedback received.", 200

@app.route("/admin/feedback/<user_id>", methods=["GET"])
@auth.login_required
def get_user_feedback(user_id):
    if user_id in user_feedback:
        feedbacks = "\n".join(user_feedback[user_id])
    else:
        feedbacks = "No feedback found for this user."
    return feedbacks

@app.errorhandler(404)
def page_not_found(e):
    return jsonify({"error": "Page not found"}), 404

@app.errorhandler(500)
def internal_server_error(e):
    return jsonify({"error": "Internal server error"}), 500

def clear_old_logs():
    while True:
        now = datetime.now()
        for user_id, logs in list(user_sessions.items()):
            user_sessions[user_id] = [log for log in logs if datetime.strptime(log.split("\n")[0].split(": ")[1], '%Y-%m-%d %H:%M:%S') > now - timedelta(days=7)]
        time.sleep(86400)  # Run this task daily

if __name__ == "__main__":
    threading.Thread(target=clear_old_logs).start()
    app.run(port=5000)
