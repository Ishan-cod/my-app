import React from "react";
import Sidebar from "../jobs_available/test_comps/Sidebar";
import Main_body from "../jobs_available/test_comps/MainBody";

export default function page() {
  return (
    <>
      <div className="h-screen overflow-hidden">
        <div className="flex h-full">
          <Sidebar />
          <Main_body></Main_body>
        </div>
      </div>
    </>
  );
}
