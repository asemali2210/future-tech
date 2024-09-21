'use client';

import SectionHead from "@/components/ui/sectionHead";
import { useState, useEffect, useCallback } from 'react'
import useFetchBlogs from "@/hooks/useFetchBlogs";
import FilterButton from "../ui/FilterButton";
import Blog from "../ui/Blog";
import { IoReload } from "react-icons/io5"; 

export default  function HomeBlogs() {

    const { blogsData, tags, isLoading, error } = useFetchBlogs();
    const [filteredBlogs, setFilteredBlogs] = useState(blogsData);
    const [activeTag, setActiveTag] = useState('All');
    

    useEffect(() => {
        setFilteredBlogs(blogsData);
      }, [blogsData]);

    const handleFilter = useCallback((filterParam) => {

        if (filterParam === 'All') {
            setFilteredBlogs(blogsData);
            setActiveTag('All');
        } else {
            const newBlogs = blogsData.filter(blog => blog.attributes.tags.includes(filterParam));
            setFilteredBlogs(newBlogs);
            setActiveTag(filterParam);
        }

    }, [blogsData]);


    

    if (isLoading) {
        return(
            <div className="card-text placeholder-glow  bg-dark-1">
                <div className="col-12 p-0 br-b">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="col-12 p-0 br-b">
                                    <div className="container">
                                    {Array.from({ length: 3 }).map((_, index) => (
                                        <div  className="blog__container py-5 " key={index}>
                                            <div className="row placeholder-glow ">
                                                <div className="col-md-3">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="col-2 placeholder" 
                                                            style={{width: `60px`, height: '60px', borderRadius: '50%'}}>
                                                        </div>
                                                        <div className="auth__data placeholder-glow col-9">
                                                            <h2 className="col-12 placeholder rounded"></h2>
                                                            <p className="col-7 placeholder rounded"></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-7 d-flex row-gap-3 flex-column gap-2">
                                                    <div className="col-4 placeholder rounded"></div>
                                                    <div className="col-6 placeholder rounded"></div>
                                                    <div className="col-10 placeholder rounded"></div>
                                                </div> 
                                                <div className="col-md-2 align-self-center placeholder rounded" style={{height: '60px'}}>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    };


    if (error){
        const refreshPage = () => {
            window.location.reload()
        }
        return (
            <div className="error-blogs bg-dark-1">
                <div className="container-fluid">
                    <div className="d-flex justify-content-center align-items-center"  style={{height: '200px'}}>
                        <button className="error__btn d-block" onClick={refreshPage}><IoReload /> Retry</button>
                    </div>
                </div>
            </div>
       )
    }

    return (
        <div className="home__blogs bg-dark-1">
            <SectionHead 
            tag="A Knowledge Treasure Trove" head="Explore FutureTech's In-Depth Blog Posts" link
            href="/blogs" content="View all content"
        />
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0 br-b">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="home__blogs__filter__form">
                                    <div className="row">
                                        {
                                            tags.map(tag=> (
                                                <FilterButton key={tag} tag={activeTag} btnTag={tag} onFilter={handleFilter} />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                {
                    filteredBlogs.map(blog => (
                        <div className="col-12 p-0 br-b">
                            <div className="container">
                                <div  className="blog__container">
                                    <Blog  blog={blog.attributes} id={blog.id} key={blog.id}/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
  )
};




