'use client'
import React, { useEffect, useState } from 'react'
import { fetchNews } from '@/store/slices/newsSlice';
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image';
import { getStrapiUrl } from '@/utils/strapi';
import Link from 'next/link';
import ForwordLink from '@/components/buttons/ForwordLink';
import { CiHeart } from 'react-icons/ci';
import { TbLocationShare } from 'react-icons/tb';
export default function NewsGrid() {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news)
    
    const headerNews = news.status == 'succeeded' && news.news.data[0];

    useEffect(()=> {
      dispatch(fetchNews());
    }, []);
    if (news.status == 'succeeded') {
      return (
        <div className='news__grid br-t'>
            <div className='container-fluid'>
              <div className='row'>
              <div className='col-12 br-b'>
                <div className='header__news py-5'>
                      <div className='container'>
                        <div className='row'>
                          <div className='col-md-4'>
                            <div className='news__img'>
                              <Image className='img-fluid' quality={100} width={500} height={500} src={getStrapiUrl(headerNews.attributes.image.data.attributes.url)}  alt={headerNews.attributes.title} /> 
                            </div>
                          </div>
                          <div className='col-md-8'>
                            <div className='blog__content'>
                              <h4 className='blog__title fw-bold c-wh'>{headerNews.attributes.title}</h4>
                              <p className='blog__body mt-3'>{headerNews.attributes.body}</p>
                              <div className='blog__data d-flex gap-5 mt-4 '>
                                <div>
                                  <p className='d-block'>Publication Date</p>
                                  <p className='c-wh mt-2'>{headerNews.attributes.date}</p> 
                                  </div>
                                <div>
                                  <p className='d-block'>Category</p>
                                  <p className='c-wh mt-2'>{headerNews.attributes.category}</p>
                                  </div>
                                <div>
                                  <p className='d-block'>Author</p>
                                  <p className='c-wh mt-2'>{headerNews.attributes.author}</p>
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
              </div>
              <div className='col-12 br-b'>
                <div className='news__boxes py-5'>
                  <div className='container'>
                    <div className='row row-gap-5'>
                      {
                        news.news.data.slice(0,3).map(newsD => (
                          <div className='col-md-4' key={newsD.id}>
                          <div className='news__box'>
                            <Image src={getStrapiUrl(newsD.attributes.image.data.attributes.url)} className="img-fluid" width={400} height={400} alt={newsD.attributes.title} />
                              <Link className='h6 mt-3 c-wh text-nowrap text-truncate d-block' href={`/news/${newsD.id}`}>
                                  {newsD.attributes.title}
                              </Link>
                              <p>{newsD.attributes.category}</p>
                            <div  className='mt-2 d-flex flex-lg-row flex-column gap-3 align-items-lg-center '>
                              <div className='interactions flex-grow-1 d-flex column-gap-2'>
                                <div className='news__interaction'>
                                  <CiHeart />
                                  <p className='c-wh'>{newsD.attributes.interactions.likes}</p>
                                </div>
                                <div className='news__interaction'>
                                  <TbLocationShare  />
                                  <p className='c-wh'>{newsD.attributes.interactions.likes}</p>
                                </div>
                              </div>
                              <div className='flex-md-shrink-1'>
                                <ForwordLink href={`/news/${newsD.id}`} content="Read more"/>
                              </div>
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
            </div>
        </div>
      )
    }
};

