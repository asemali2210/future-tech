'use client'
import SectionHead from "@/components/ui/sectionHead";
import useFetchApi from '@/hooks/useFetchApi';
import ErorrReload from "@/components/ui/ErorrReload";
import SkeletonTestimonials from "../ui/SkeletonTestimonials";
import Testimonial from "../ui/Testimonial";

export default  function HomeTestimonials() {
    const { data, isLoading, error } = useFetchApi(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/testimonials?populate=*`)

    if (isLoading) return <SkeletonTestimonials />

    if (error) return <ErorrReload />


  return (
    <div className="home__testimonials bg-dark-1">
        <SectionHead 
            head="Real Words from Real Readers"
            href='/testimonials'
            content="View All Testimonials"
            link
            tag="What Our Readers Say"
        />
        <div className="container-fluid p-0">
            <div className="col-12  br-b">
                <div className="container">
                    <div className="row">
                        {
                            data.slice(0,3).map(testimonial => (
                                <Testimonial testimonial={testimonial.attributes} id={testimonial.id} key={testimonial.id}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="col-12  br-b">
                <div className="container">
                    <div className="row">
                        {
                            data.slice(3,6).map(testimonial => (
                                <Testimonial testimonial={testimonial.attributes} id={testimonial.id} key={testimonial.id}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};