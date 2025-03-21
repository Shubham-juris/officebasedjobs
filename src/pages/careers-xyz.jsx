import React from "react";
import Form from "../Componets/career-forms/form";
import Jobmail from "../Componets/career-forms/Jobmail";
import Inmail from "../Componets/career-forms/Inmail";
import Next from "../Componets/career-forms/Next";
import OfficeManagerMail from "../Componets/career-forms/OfficeManagerMail";
import CustomerServiceMail from "../Componets/career-forms/CustomerServiceMail";
import ReceptionistMail from "../Componets/career-forms/ReceptionistMail";
import OfficeClerkMail from "../Componets/career-forms/OfficeClerkMail";
import OfficeAssistantPartTime from "../Componets/career-forms/OfficeAssistantPartTime";
import Bookkeeper from "../Componets/career-forms/bookkeeper";
import SoftwareDeveloperMail from "../Componets/career-forms/SoftwareDeveloperMail";
import OfficeAdministrationManager from "../Componets/career-forms/OfficeAdministrationManager";


const Careers = () => {
  return (
    <>
      <Form />
      <Jobmail />
      < Inmail />
      <Next />
      <OfficeManagerMail/>
      <CustomerServiceMail/>
      <ReceptionistMail/>
      <OfficeClerkMail />
      <OfficeAssistantPartTime />
      <Bookkeeper />
      <SoftwareDeveloperMail />
      <OfficeAdministrationManager />
    </>
  );
};

export default Careers;
