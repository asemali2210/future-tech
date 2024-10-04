import Contact from "@/components//Contact";
import Blogs from "@/components/FilterdBlogs";
import NewsGrid from "@/layout/news/NewsGrid";
import '@/styles/components/sections/_contact.scss';
import { getStrapiUrl } from "@/utils/strapi";
import { Suspense } from "react";
import Loading from "./loading";

export default function News() {
  return (
    <div className="news__page bg-dark-1">
      <div className="container">
        <div className="news__header py-5">
          <p className="hd-xlg c-wh">
            Today's Headlines: Stay
          </p>

          <p className="d-flex">
            <span className="hd-xlg c-wh">Informed</span>
            <span className="ms-md-5 p-3">Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage.</span>
          </p>
        </div>

      </div>
      <NewsGrid />
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
