import React from "react";
import Header from "../Componets/JobSeekers/header";
import Structure from "../Componets/JobSeekers/Dragton/Structure";
import Kreatesystems from "../Componets/JobSeekers/kreatesystems/Kreatesystems";
import Post from "../Componets/JobSeekers/posts/Post";
import NewPosts from "../Componets/JobSeekers/newPosts/NewPosts";
import JobHeader from "../Componets/JobSeekers/JobHeader";
import Discoversession from "../Componets/JobSeekers/DiscoverSession";
import Jobs from "../Componets/career-forms/careerjobs/jobs";

const JobSeekers = () => {
  return (
    <>
      {/* <JobHeader />
      <Discoversession /> */}
      <Header />
      <Post />
      {/* <Jobs/> */}
      {/* <Structure />
      <Kreatesystems />
      <NewPosts /> */}
    </>
  );
};

export default JobSeekers;
