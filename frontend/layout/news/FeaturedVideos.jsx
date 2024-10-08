'use client';
import useFetchApi from "@/hooks/useFetchApi";
import { getStrapiUrl } from "@/utils/strapi";
import Image from "next/image";
import Link from "next/link";


export default  function FeaturedVideos() {
    const { data, isLoading, error } = useFetchApi(getStrapiUrl('/api/podcasts?populate=*'));
    console.log(data)
    return (
        <div className='featured__video py-5 br-b'>
            <div className='container'>
                <div className="row align-items-start">
                    {
                        !isLoading && data.map(podcast => (
                            <div className="col-md-6">
                                <div className="featured__video__container py-3 d-flex flex-column gap-2">
                                    <div className="thumbnail rounded-10 overflow-hidden">
                                        <img  src={getStrapiUrl(podcast.attributes.thumbnail.data.attributes.url)} width="100%" alt={podcast.title} quality={100} />
                                    </div>
                                    <Link href={`/api/podcast/${podcast.id}`} className="h6 c-wh">{podcast.attributes.title}</Link>
                                    <p className="text-truncat">{podcast.attributes.body.slice(0,160) + '...'}</p>
                                </div>
                            </div>
                        ) )
                    }
                </div>
            </div>
        </div>
    )
};