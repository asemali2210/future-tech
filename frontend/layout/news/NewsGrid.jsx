'use client'
import React, { useEffect } from 'react'
import { fetchNews } from '@/store/slices/newsSlice';
import { useDispatch, useSelector } from "react-redux";
function NewsGrid() {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news)
    useEffect(()=> {
        dispatch(fetchNews())
        console.log(news)
    }, [])
    console.log(news)
  return (
    <div>
        {news.status == 'succeeded' && news.news.data.map( newsid => <div className='c-wh' key={newsid.id}>{newsid.attributes.title}</div>)}
    </div>
  )
}

export default NewsGrid