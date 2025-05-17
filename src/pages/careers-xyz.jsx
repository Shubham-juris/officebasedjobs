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
import DataEntryClerk from "../Componets/career-forms/Drayton/DrDataEntryClerk";
import HotelFrontDeskClerk from "../Componets/career-forms/Drayton/DrHotelFrontDeskClerk";
import DrBookkeeper from "../Componets/career-forms/Drayton/DrBookkeeper";
import DrAdministrativeAssistant from "../Componets/career-forms/Drayton/DrAdministrativeAssistant";
import DrReceptionist from "../Componets/career-forms/Drayton/DrReceptionist";
import DrAssistantManager from "../Componets/career-forms/Drayton/DrAssistantManager";
import EdAdministrativeSupport from "../Componets/career-forms/Edmonton/EdAdministrativeSupport";
import EdCollisionDataClerk from "../Componets/career-forms/Edmonton/EdCollisionDataClerk";
import EdDataEntryClerk from "../Componets/career-forms/Edmonton/EdDataEntryClerk";
import AccountsPayableClerk from "../Componets/career-forms/Edmonton/EdAccountsPayableClerk";
import EdBookkeeper from "../Componets/career-forms/Edmonton/EdBookkeeper";
import EdReceptionistConcierge from "../Componets/career-forms/Edmonton/EdReceptionistConcierge";
import AiAccountingCoordinator from "../Componets/career-forms/Alpine/AiAccountingCoordinator";
import AiOfficeManagerMail from "../Componets/career-forms/Alpine/AiOfficeManagerMail";
import AiReceptionistMail from "../Componets/career-forms/Alpine/AiReceptionistMail";
import AiBookkeeper from "../Componets/career-forms/Alpine/AiBookkeeper";
import AiAdministrativeAssistant from "../Componets/career-forms/Alpine/AiAdministrativeAssistant";
import JobListings from "../Componets/JobSeekers/easytax/StuctureEasy";

const Careers = () => {
  return (
    <>
      <Form />
      {/* <Jobma`il /> */}
      <Inmail />
      <Next />
      <OfficeManagerMail />
      {/* <CustomerServiceMail /> */}
      <ReceptionistMail />
      <OfficeClerkMail />
      <OfficeAssistantPartTime />
      <Bookkeeper />
      <SoftwareDeveloperMail />
      <OfficeAdministrationManager />
      <DataEntryClerk />
      <HotelFrontDeskClerk />
      <DrBookkeeper />
      <DrAdministrativeAssistant />
      <DrReceptionist />
      <DrAssistantManager />
      <EdAdministrativeSupport />
      <EdCollisionDataClerk />
      <EdDataEntryClerk />
      <AccountsPayableClerk />
      <EdBookkeeper />
      <EdReceptionistConcierge />
      <AiAccountingCoordinator />
      <AiOfficeManagerMail />
      <AiReceptionistMail />
      <AiBookkeeper />
      <AiAdministrativeAssistant />
      <JobListings />
    </>
  );
};

export default Careers;
