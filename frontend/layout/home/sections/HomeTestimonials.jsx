'use client'
import SectionHead from "@/components/ui/sectionHead";
import { LiaStarSolid } from "react-icons/lia";
import {useFetchApi} from '@/hooks/useFetchApi';
export default  function HomeTestimonials() {

  return (
    <div className="home__testimonials">
        <SectionHead 
            head="Real Words from Real Readers"
            href='/testimonials'
            content="View All Testimonials"
            link
            tag="What Our Readers Say"
        />
        <div className="container-fluid">
            <div className="col-12 br-b">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 br-r">
                            <div className="testimonials__box">
                                <div className="testimonial__user d-flex">
                                    <div className="">
                                        <p>username</p>
                                        <p>location</p>
                                    </div>
                                </div>
                                <div className="testimonial__body">
                                    <div className="testimonial__stars d-flex">
                                        <LiaStarSolid />
                                        <LiaStarSolid />
                                        <LiaStarSolid />
                                        <LiaStarSolid />
                                        <LiaStarSolid />
                                    </div>
                                    <p>message</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};