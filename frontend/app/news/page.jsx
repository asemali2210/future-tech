import Contact from "@/components//Contact";
import Blogs from "@/components/FilterdBlogs";
import '@/styles/components/sections/_contact.scss';

export default function podcasts() {
  return (
    <div className="news__page">
      <Blogs 
        url={`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=*`}
        head="Discover the World of Headlines"
        tag="Welcome to Our News Hub"
        content="View All News"
        href='/news'
      />
      <Contact />
    </div>
  )
}
