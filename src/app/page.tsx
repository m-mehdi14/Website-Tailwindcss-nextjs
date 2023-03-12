import Content2 from "@/components/Content2";
import Content3 from "@/components/Content3";
import Content4 from "@/components/Content4";
import ContentDAO from "@/components/ContentDAO";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
   <>
   <Hero/>
   <ContentDAO/>
   <Content2/>
   <Content3/>
   <Content4/>
   </>
  )
}
