import React from "react";
import ResourceHeader from "../Componets/Resource/ResourceHeader";
import ResourceTraning from "../Componets/Resource/ResourceTraning";
import ResourceSection from "../Componets/Resource/ResourceSection";
import ResourceSlider from "../Componets/Resource/ResourceSlider";
import ResourceContact from "../Componets/Resource/ResourceContact";

const Resource = () => {
  return (
    <div style={{ width: "1240px", margin: "auto" }}>
      <ResourceHeader />
      <ResourceTraning />
      <ResourceSection />
      <ResourceSlider />
      <ResourceContact />
    </div>
  );
};

export default Resource;
