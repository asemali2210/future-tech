import HomeHeader from "@/components/HomeHeader";
import HomeBlogs from "@/layout/home/sections/HomeBlogs";
import HomeFeatures from "@/layout/home/sections/HomeFeatures";
import SubHeader from "@/layout/home/sections/SubHeader";
import HomeResources from "@/layout/home/sections/HomeResources";
import HomeTestimonials from "@/layout/home/sections/HomeTestimonials";


export default async function Home() {

  return (
    <div>
      <HomeHeader />
      <SubHeader />
      <HomeFeatures />
      <HomeBlogs />
      <HomeResources />
      <HomeTestimonials />
    </div>
  )
}
