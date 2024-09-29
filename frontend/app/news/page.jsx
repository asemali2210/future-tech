import Contact from "@/components//Contact";
import Blogs from "@/components/FilterdBlogs";
import '@/styles/components/sections/_contact.scss';
import { getStrapiUrl } from "@/utils/strapi";

export default function News() {
  return (
    <div className="news__page">
      <Blogs 
        url={getStrapiUrl('/api/blogs?populate=*')}
        head="Discover the World of Headlines"
        tag="Welcome to Our News Hub"
        content="View All News"
        href='/news'
      />
      <Contact />
    </div>
  )
}
