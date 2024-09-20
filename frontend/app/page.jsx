import HomeHeader from "@/components/HomeHeader";
import SectionHead from "@/components/ui/sectionHead";
import HomeBlogs from "@/layout/home/HomeBlogs";
import HomeFeatures from "@/layout/home/HomeFeatures";
import SubHeader from "@/layout/home/SubHeader";


export default async function Home() {

  return (
    <div>
      <HomeHeader />
      <SubHeader />
      <HomeFeatures />
      <SectionHead
        href="/" content="View All Testimonials" link
        tag="Your Gateway to In-Depth Information" head="Unlock Valuable Knowledge with FutureTech's Resources"
      />
      <HomeBlogs />
    </div>
  )
}
