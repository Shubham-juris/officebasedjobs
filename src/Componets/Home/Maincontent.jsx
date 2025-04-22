import React from "react";
import { Box } from "@mui/material";

export default function Maincontent() {
  return (
    <Box className="w-full bg-stone-50 py-20">
      <Box className="container py-4 mx-auto flex items-center flex-col gap-4">
        <h1 className="text-4xl text-blue-900 py-6 font-bold font-serif text-center">
          About Office based Jobs
        </h1>
        <Box className="w-full max-w-4xl text-center px-4">
          <p className="font-serif font-normal text-lg">
            At Office Based Jobs, we specialize in matching skilled
            professionals with fulfilling career opportunities in office-based
            environments. Our mission is to bridge the gap between talented job
            seekers and leading companies, ensuring the perfect fit for both
            parties. With a keen understanding of the evolving needs of the modern workforce.
          </p>
        </Box>
      </Box>
    </Box>
  );
}
