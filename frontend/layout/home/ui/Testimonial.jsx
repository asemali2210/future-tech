import Image from "next/image";
import { LiaStarSolid } from "react-icons/lia";


export default function Testimonial({testimonial, id}) {
  return (
    <div className="col-md-4 br-r" key={id}>
        <div className="testimonials__box py-5 px-4 d-flex flex-column align-items-center">
            <div className="testimonial__user mb-5 d-flex">
                <div className="me-4">
                <Image src={process.env.NEXT_PUBLIC_STRAPI_URL + testimonial.userImg.data.attributes.url} quality={100} alt={testimonial.username} width={60} height={60}/>
                </div>
                <div className="">
                    <p className="c-wh fw-medium">{testimonial.username}</p>
                    <p>{testimonial.location}</p>
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
                <p className="text-center">{testimonial.message}</p>
            </div>
        </div>
    </div>
  )
}