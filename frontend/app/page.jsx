import HomeHeader from "@/layout/home/sections//HomeHeader";
import Blogs from "@/components/FilterdBlogs";
import HomeFeatures from "@/layout/home/sections/HomeFeatures";
import SubHeader from "@/layout/home/sections/SubHeader";
import HomeResources from "@/layout/home/sections/HomeResources";
import HomeTestimonials from "@/layout/home/sections/HomeTestimonials";
import Contact from "@/components/Contact";
import { getStrapiUrl } from "@/utils/strapi";

export default function Home() {

  return (
    <>
      <HomeHeader />
      <SubHeader />
      <HomeFeatures />
      <Blogs 
      
        url={getStrapiUrl('/api/blogs?populate=*')}
        head="Explore FutureTech's In-Depth Blog Posts"
        tag="A Knowledge Treasure Trove"
        content="View All blogs"
        href='/blogs'

      />
      <HomeResources />
      <HomeTestimonials />
      <Contact />
    </>
  )
}
