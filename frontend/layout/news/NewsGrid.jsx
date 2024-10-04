'use client'
import React, { useEffect, useState } from 'react'
import { fetchNews } from '@/store/slices/newsSlice';
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image';
import { getStrapiUrl } from '@/utils/strapi';
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
                            <Image className='img-fluid' quality={100} width={500} height={500} src={getStrapiUrl(headerNews.attributes.image.data.attributes.url)}  alt="iamgess" /> 
                            </div>
                          </div>
                          <div className='col-md-8'>
                            <div className='blog__content'>
                              <h4 className='blog__title fw-bold c-wh'>{headerNews.attributes.title}</h4>
                              <p className='blog__body mt-3'>{headerNews.attributes.body}</p>
                              <p className='blog__body d-flex gap-5 mt-4 mb-4'>
                                <div>
                                  <p className='d-bloc'>Publication Date</p>
                                  <p className='c-wh mt-2'>{headerNews.attributes.date}</p> 
                                  </div>
                                <div>
                                  <p className='d-bloc'>Category</p>
                                  <p className='c-wh mt-2'>{headerNews.attributes.category}</p>
                                  </div>
                                <div>
                                  <p className='d-bloc'>Author</p>
                                  <p className='c-wh mt-2'>{headerNews.attributes.author}</p>
                                  </div>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
              </div>
              </div>
    
            </div>
            {news.status == 'succeeded' && news.news.data.map( newsid => <div className='c-wh' key={newsid.id}>{newsid.attributes.title}</div>)}
        </div>
      )
    }
};

