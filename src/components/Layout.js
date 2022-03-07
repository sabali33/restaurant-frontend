import React from "react";
import Navigation from "./Navigation";

export const LayoutWithNav = ({ children, activeTab }) => {
  return (
    <section>
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-1/4">
          <Navigation activeTab={activeTab} />
        </div>
        <div className="md:w-3/4 md:ml-8">{children}</div>
      </div>
    </section>
  );
};
