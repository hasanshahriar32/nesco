import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

export default function MainLayout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <div className="mb-36">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
