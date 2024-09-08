import HomeHeader from "@/components/HomeHeader";
import SectionHead from "@/components/ui/sectionHead";
import HomeBlogs from "@/layout/home/HomeBlogs";
import HomeFeatures from "@/layout/home/HomeFeatures";
import SubHeader from "@/layout/home/SubHeader";


export default async function Home() {
  /* fetch blogs */
  const res = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-08-02&sortBy=publishedAt&apiKey=4bf4a7f66a424d4fb945b5e02cb174c9')
  const blogs = await res.json()
  const articles = blogs.articles;
  return (
    <div>
      <HomeHeader />
      <SubHeader />
      <HomeFeatures />
      
    

      <SectionHead
        href="/" content="View All Testimonials" link
        tag="Your Gateway to In-Depth Information" head="Unlock Valuable Knowledge with FutureTech's Resources"
      />
      <HomeBlogs articles={articles} />
    </div>
  )
}
