import React from "react";
import Header from "../Componets/JobSeekers/header";
import Structure from "../Componets/JobSeekers/Dragton/Structure";
import Kreatesystems from "../Componets/JobSeekers/kreatesystems/Kreatesystems";
import Post from "../Componets/JobSeekers/posts/Post";
import NewPosts from "../Componets/JobSeekers/newPosts/NewPosts";
import JobHeader from "../Componets/JobSeekers/JobHeader";
import Discoversession from "../Componets/JobSeekers/DiscoverSession";

const JobSeekers = () => {
  return (
    <>
      <JobHeader />
      <Discoversession />
      <Header />
      <Structure />
      <Kreatesystems />
      <Post />
      <NewPosts />
    </>
  );
};

export default JobSeekers;
