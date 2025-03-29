import React from "react";

import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-950 to-blue-950  h-screen">
      <div className="sticky top-0 shadow-2xl">
        <Navbar />
      </div>

      <h1 className="text-white">
       hello world
      </h1>
    </div>
  );
};

export default Home;
