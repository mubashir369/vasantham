"use client";
import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <SplashScreen onFinish={() => setIsLoaded(true)} />}
      {isLoaded && (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
