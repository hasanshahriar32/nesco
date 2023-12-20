import React from "react";
import Footer2 from "@/components/Footer2";

export default function MainLayout2({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <div className="mb-36">
        <main>{children}</main>
      </div>
      <Footer2 />
    </>
  );
}
