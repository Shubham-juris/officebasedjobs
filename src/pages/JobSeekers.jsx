import React from "react";
import Header from "../Componets/JobSeekers/header";
import Structure from "../Componets/JobSeekers/Dragton/Structure";
import Kreatesystems from '../Componets/JobSeekers/kreatesystems/Kreatesystems'
import Post from "../Componets/JobSeekers/posts/Post";

const JobSeekers = () => {
  return (
    <>
      <div>

        <Header />
        <Structure />
        <Kreatesystems />
        <Post />
      </div>
    </>
  );
};

export default JobSeekers;
