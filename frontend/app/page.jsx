import HomeHeader from "@/layout/home/sections//HomeHeader";
import HomeBlogs from "@/layout/home/sections/HomeBlogs";
import HomeFeatures from "@/layout/home/sections/HomeFeatures";
import SubHeader from "@/layout/home/sections/SubHeader";
import HomeResources from "@/layout/home/sections/HomeResources";
import HomeTestimonials from "@/layout/home/sections/HomeTestimonials";
import HomeContact from "@/layout/home/sections/HomeContact";


export default async function Home() {

  return (
    <>
      <HomeHeader />
      <SubHeader />
      <HomeFeatures />
      <HomeBlogs />
      <HomeResources />
      <HomeTestimonials />
      <HomeContact />
    </>
  )
}
