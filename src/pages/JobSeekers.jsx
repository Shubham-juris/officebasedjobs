import React from "react";
import Header from "../Componets/JobSeekers/header";
import Structure from "../Componets/JobSeekers/Dragton/Structure";
import Kreatesystems from '../Componets/JobSeekers/kreatesystems/Kreatesystems'
import Post from "../Componets/JobSeekers/posts/Post";
import NewPosts from "../Componets/JobSeekers/newPosts/NewPosts";

const JobSeekers = () => {
  return (
    <>
      <div>

        <Header />
        <Structure />
        <Kreatesystems />
        <Post />
        <NewPosts/>
      </div>
    </>
  );
};

export default JobSeekers;
