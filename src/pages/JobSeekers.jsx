import React from "react";
import Header from "../Componets/JobSeekers/header";
// import Bookkeeper from "../Componets/JobSeekers/Innisfill/InBookkeeper";
import KsOfficeClark from "../Componets/JobSeekers/kreatesystems/KsOfficeClark";
import KsBookKeeper from "../Componets/JobSeekers/kreatesystems/KsBookKeeper";
import KsAdministrationManager from "../Componets/JobSeekers/kreatesystems/KsAdministrationManager";
import KsSupervisor from "../Componets/JobSeekers/kreatesystems/KsSupervisor";
import KsOfficeManager from "../Componets/JobSeekers/kreatesystems/KsOfficeManager";
import KsBranchManager from "../Componets/JobSeekers/kreatesystems/KsBranchManager";
import KsHumanResourcesSupervisor from "../Componets/JobSeekers/kreatesystems/KsHumanResourcesSupervisor";
import Structure from "../Componets/JobSeekers/Dragton/Structure";
import Structuertow from '../Componets/JobSeekers/Innisfill/Structuertow'

const JobSeekers = () => {
  return (
    <>
      <div>
        
        <Header />
        {/* <Bookkeeper /> */}
        <KsOfficeClark />
        <KsBookKeeper />
        <KsAdministrationManager />
        <KsSupervisor />
        <KsOfficeManager />
        <KsBranchManager />
        <KsHumanResourcesSupervisor /> 
         <Structure />
        <Structuertow />
      </div>
    </>
  );
};

export default JobSeekers;
