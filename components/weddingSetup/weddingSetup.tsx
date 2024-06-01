"use client";
import React from "react";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import TopNav from "@/components/topNav/topNav";
import WeddingSetupBanner from "@/components/weddingSetup/weddingSetupBanner";
import WeddingSetupContent from "@/components/weddingSetup/weddingSetupContent";
import Copyright from "@/components/footer/copyright/copyRight";

const WeddingSetup = () => {
  return (
    <div>
      <TopNav />
      <Navbar />
      <WeddingSetupBanner />
      <WeddingSetupContent />
      <Footer />
      <Copyright />
    </div>
  );
};

export default WeddingSetup;
