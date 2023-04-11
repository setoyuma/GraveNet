import React from "react";
import Entry from "../components/Entry";
import Cubes from "../components/Cubes";

const Home = () => {
  return (
    <div className=" text-5xl text-white h-36">
      <section className=" flex justify-center">
        <div className="mx-auto flex max-w-screen-sm items-center justify-center">
          <div className="bg-gradient-to-r from-teal-700 via-fuchsia-500 to-black animate-gradient-xy text-6xl text-white inline-blockalign-middle p-1">
            <div className="flex h-full w-full items-center justify-center bg-black">
              <h1>Home</h1>
            </div>
          </div>
        </div>
      </section>
      <ul className="flex-col py-40 items-center">
        <li>
          <section>
            <div>
              <Entry entryNumber={1} />
            </div>
          </section>
        </li>
        <li className=' my-6'>
          <section>
            <div>
              <Entry entryNumber={2} />
            </div>
          </section>
        </li>
        <li>
          <Cubes />
        </li>
      </ul>
    </div>
  );
};

export default Home;
