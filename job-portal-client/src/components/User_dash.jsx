import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { VscThreeBars } from "react-icons/vsc";
{
  /* <CiCirclePlus className='relative items-center text-center text-6xl justify-center ' /> */
}
{
  /* <MdEdit /> */
}
function User_dash() {
  return (
    <div className="flex h-screen bg-blue-800">
      <aside className="w-1/4 bg-blue-800 p-4 pt-40">
        <div className="text-center items-center justify-center text-white">
          <div className=" flex">
            <img
              src="../../public/images/new default logo.png"
              alt=""
              className="bg-gray-400 h-[150px] w-[150px] rounded-full mx-auto hover:blur-sm "
            />
          </div>
          <p className="mt-4">PROFILE NAME</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4">
            Edit Profile
          </button>
          <nav className="mt-8">
            <ul>
              <li className="mb-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full  text-center">
                  Application Status
                </button>
              </li>
              <li className="mb-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full  text-center">
                  Companies List
                </button>
              </li>
              <li>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full  text-center">
                  Statistics
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <main className="w-full   pt-16 mt-[86px] rounded-tl-[70px] bg-white">
        <div>
          <div className="text-center items-center flex gap-8 pl-20 pb-5">
            <VscThreeBars className="text-3xl " />
            <h2 className="text-3xl font-bold  ">Dashboard</h2>
          </div>
          <div className="h-1 w-full  bg-gradient-to-r from-[#ffffff] to-[#056aed]"></div>
          <div className="pl-20 pr-20">

          <div>
            <div className="bg-gray-400 h-24 w-24 rounded-full mx-auto"></div>
            <p className="mt-4">PROFILE NAME</p>
          </div>
          <div className="flex">
            <div className="w-2/3 bg-gray-100 p-4 rounded">
              <h3 className="font-bold mb-2">Skills</h3>
              <p>Details about skills...</p>
              <h3 className="font-bold mb-2 mt-4">Academics</h3>
              <p>Details about academics...</p>
            </div>
            <div className="w-2/3 bg-gray-100 p-4 ml-4 rounded">
              <h3 className="font-bold mb-2">Resume</h3>
              <p>Details about resume...</p>
            </div>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default User_dash;
