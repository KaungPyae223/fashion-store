import React from "react";
import NotificationController from "../components/NotificationController";
import HomeHeroController from "../components/HomeHeroController";
import HomeHeroPreview from "../components/HomeHeroPreview";

const PageManagement = () => {
  return (
    <div>
      <NotificationController />
      <HomeHeroController />
      <HomeHeroPreview />
      <hr></hr>
      <div className="bg-gray-800 text-white w-fit py-2 px-12 my-6 cursor-pointer">
        Update Page
      </div>
    </div>
  );
};

export default PageManagement;
