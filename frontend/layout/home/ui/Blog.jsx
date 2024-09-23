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
            <div className="row align-items-center align-items-md-start justify-content-between">
                <div className="col-lg-3 col-7">
                    <div className="home__blog__article__auth j d-flex align-items-center m-lg-0 mb-sm-5">
                        <div className="auth__img">
                            <Image   layout="responsive" src={process.env.NEXT_PUBLIC_STRAPI_URL + blog.autherImg.data.attributes.url} quality={100} alt={blog.auther} />
                        </div>
                        <div className="auth__data">
                            <h2 className="hd-md c-wh">{blog.auther}</h2>
                            <p className="c-grey-1">{blog.tags}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-7 order-md-1 order-2">
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
                <div className="col-md-3 col-lg-2 col align-self-center d-md-flex my-md-0 my-4 justify-content-md-end">
                    <ForwordLink href={`/blogs/${id}`} content='View Blog' arrow radius />
                </div>
            </div>
        </div>
    )
}