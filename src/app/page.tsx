import Footer from "@/components/layout/footer/footer";
import { Navbar } from "@/components/layout/navbar";
import { HomeTemplate } from "@/components/templates/home/home";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <HomeTemplate/>
      </main>
      <Footer/>
    </>
  );
}
