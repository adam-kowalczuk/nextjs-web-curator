import React from "react";
import Button from "./components/Button"; // Importing Button component
import Column from "./components/Column"; // Importing Column component
import Header from "./components/Header"; // Importing Header component
import captureSettingsForms from "./modules/captureSettingsForms"; // Importing captureSettingsForms module
import metadataForms from "./modules/metadataForms"; // Importing metadataForms module

/**
 * Home Component
 *
 * This component represents the home page of the application.
 * It includes a header, two columns (Capture Settings and Metadata),
 * and a button.
 */
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Rendering Header component */}
      <Header />
      <div className="flex flex-grow bg-white w-1/2">
        {/* Rendering Column component for Capture Settings */}
        <Column title="Capture Settings" forms={captureSettingsForms} />
        {/* Rendering Column component for Metadata */}
        <Column title="Metadata" forms={metadataForms} />
      </div>
      {/* Rendering Button component */}
      <Button />
    </div>
  );
}
