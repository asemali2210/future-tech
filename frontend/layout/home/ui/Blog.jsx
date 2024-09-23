import { CiHeart } from "react-icons/ci";
import { TbLocationShare } from "react-icons/tb";
import { FaRegComment } from "react-icons/fa6";
import ForwordLink from "@/components/buttons/ForwordLink";
import Image from "next/image";

export default function Blog({blog,id }){

    const d = new Date(`${blog.date}`).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

    return(
        <div className="home__blog__article">
            <div className="row row-gap-lg-0 row-gap-5 align-items-center align-items-md-start justify-content-between">
                <div className="col-lg-3 col-7">
                    <div className="home__blog__article__auth d-flex align-items-center">
                        <div className="auth__img">
                            <Image  height={60} width={60}  className="img-fluid"  src={process.env.NEXT_PUBLIC_STRAPI_URL + blog.autherImg.data.attributes.url} quality={100} alt={blog.auther} />
                        </div>
                        <div className="auth__data">
                            <h2 className="hd-md c-wh">{blog.auther}</h2>
                            <p className="c-grey-1">{blog.tags}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-7 order-lg-1 order-2">
                    <div className="home__blog__article__mid">
                        <p className="c-w blog__date">{d}</p>
                        <h5 className="c-wh blog__title">{blog.title}</h5>
                        <p className="c-grey-1 blog__body">{blog.body}</p>
                        <div className="blog__interactions d-flex">
                            <button className="blog__interaction">
                                <span className="__icon">
                                    <CiHeart />
                                </span>
                                {blog.interaction.likes}
                            </button>
                            <button className="blog__interaction">
                                <span className="__icon">
                                    <TbLocationShare  />
                                </span>
                                {blog.interaction.shares}
                            </button>
                            <button className="blog__interaction">
                                <span className="__icon">
                                    <FaRegComment  />
                                </span>
                                {blog.interaction.comments}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-lg-2 col  order-lg-2  align-self-md-center d-flex  my-0 justify-content-end">
                    <ForwordLink href={`/blogs/${id}`} content='View Blog' arrow radius />
                </div>
            </div>
        </div>
    )
}