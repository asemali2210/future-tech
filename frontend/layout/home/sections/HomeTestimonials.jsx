'use client'
import SectionHead from "@/components/ui/sectionHead";
import { LiaStarSolid } from "react-icons/lia";
import useFetchApi from '@/hooks/useFetchApi';
import Image from "next/image";

export default  function HomeTestimonials() {
    const { data, isLoading, error } = useFetchApi(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/testimonials?populate=*`)
    console.log(data)
    if (isLoading) return <p>Loading testimonials...</p>;
    if (error) return <p>Error: {error}</p>;
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
                                <div className="col-md-4 br-r" key={testimonial.id}>
                                    <div className="testimonials__box py-5 px-4 d-flex flex-column align-items-center">
                                        <div className="testimonial__user mb-5 d-flex">
                                            <div className="me-4">
                                            <Image src={process.env.NEXT_PUBLIC_STRAPI_URL + testimonial.attributes.userImg.data.attributes.url} quality={100} alt={testimonial.attributes.username} width={60} height={60}/>
                                            </div>
                                            <div className="">
                                                <p className="c-wh fw-medium">{testimonial.attributes.username}</p>
                                                <p>{testimonial.attributes.location}</p>
                                            </div>
                                        </div>
                                        <div className="testimonial__body c-wh position-relative border-dark-4 bg-dark-2 px-3 py-4 rounded-10">
                                            <div className="testimonial__stars  c-main rounded-10 px-3 position-absolute d-flex justify-content-center bg-dark-1 border-dark-4 ">
                                                <LiaStarSolid className="star__icon"/>
                                                <LiaStarSolid className="star__icon" />
                                                <LiaStarSolid className="star__icon"/>
                                                <LiaStarSolid className="star__icon"/>
                                                <LiaStarSolid className="star__icon"/>
                                            </div>
                                            <p className="text-center">{testimonial.attributes.message}</p>
                                        </div>
                                    </div>
                                </div>

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
                                <div className="col-md-4 br-r" key={testimonial.id}>
                                    <div className="testimonials__box py-5 px-4 d-flex flex-column align-items-center">
                                        <div className="testimonial__user mb-5 d-flex">
                                            <div className="me-4">
                                            <Image src={process.env.NEXT_PUBLIC_STRAPI_URL + testimonial.attributes.userImg.data.attributes.url} quality={100} alt={testimonial.attributes.username} width={60} height={60}/>
                                            </div>
                                            <div className="">
                                                <p className="c-wh fw-medium">{testimonial.attributes.username}</p>
                                                <p>{testimonial.attributes.location}</p>
                                            </div>
                                        </div>
                                        <div className="testimonial__body c-wh position-relative border-dark-4 bg-dark-2 px-3 py-4 rounded-10">
                                            <div className="testimonial__stars  c-main rounded-10 px-3 position-absolute d-flex justify-content-center bg-dark-1 border-dark-4 ">
                                                <LiaStarSolid className="star__icon"/>
                                                <LiaStarSolid className="star__icon" />
                                                <LiaStarSolid className="star__icon"/>
                                                <LiaStarSolid className="star__icon"/>
                                                <LiaStarSolid className="star__icon"/>
                                            </div>
                                            <p className="text-center">{testimonial.attributes.message}</p>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};