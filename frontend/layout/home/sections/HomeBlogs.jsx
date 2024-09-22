'use client';

import SectionHead from "@/components/ui/sectionHead";
import { useState, useEffect, useCallback } from 'react'
import useFetchBlogs from "@/hooks/useFetchBlogs";
import FilterButton from "../ui/FilterButton";
import Blog from "../ui/Blog";
import ErorrReload from "@/components/ui/ErorrReload";
import SkeletonBlog from "../ui/skeletonBlog";

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


    if (isLoading) return <SkeletonBlog />


    if (error) return <ErorrReload />

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
                        <div className="col-12 p-0 br-b" key={blog.id}>
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