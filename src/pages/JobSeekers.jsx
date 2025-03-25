import React from "react";
import Header from "../Componets/JobSeekers/header";
import Accounting from "../Componets/JobSeekers/Innisfill/Accounting";
import Bookkeeper from "../Componets/JobSeekers/Innisfill/InBookkeeper";
import InAdministration from "../Componets/JobSeekers/Innisfill/InAdministration";
import InReceptionist from "../Componets/JobSeekers/Innisfill/InReceptionist";
import KsOfficeClark from "../Componets/JobSeekers/kreatesystems/KsOfficeClark";
import KsBookKeeper from "../Componets/JobSeekers/kreatesystems/KsBookKeeper";
import KsAdministrationManager from "../Componets/JobSeekers/kreatesystems/KsAdministrationManager";
import KsSupervisor from "../Componets/JobSeekers/kreatesystems/KsSupervisor";
import KsOfficeManager from "../Componets/JobSeekers/kreatesystems/KsOfficeManager";
import KsBranchManager from "../Componets/JobSeekers/kreatesystems/KsBranchManager";
import KsHumanResourcesSupervisor from "../Componets/JobSeekers/kreatesystems/KsHumanResourcesSupervisor";
import Structure from "../Componets/JobSeekers/Dragton/Structure";
import Kreatesystems from '../Componets/JobSeekers/kreatesystems/Kreatesystems'
import Post from "../Componets/JobSeekers/posts/Post";

const JobSeekers = () => {
  return (
    <>
      <div>
        
        <Header />
        <Accounting/>
        <Bookkeeper />
        <InAdministration />
        <InReceptionist />
        <KsOfficeClark />
        <KsBookKeeper />
        <KsAdministrationManager />
        <KsSupervisor />
        <KsOfficeManager />
        <KsBranchManager />
        <KsHumanResourcesSupervisor />
        <Structure />
        <Kreatesystems />
        <Post/>
      </div>
    </>
  );
};

export default JobSeekers;
