'use client';

import SectionHead from "@/components/ui/sectionHead";
import { useState, useEffect, useCallback } from 'react'
import FilterButton from "./ui/FilterButton";
import Blog from "./ui/Blog";
import ErorrReload from "@/components/ui/ErorrReload";
import SkeletonBlog from "./ui/SkeletonBlog";
import useFetchApi from "@/hooks/useFetchApi";

export default  function Blogs({url,tag,head,content,href}) {
    const { data, isLoading, error } = useFetchApi(`${url}`);

    // Local states for filtering blogs and active tag selection
    const [activeTag, setActiveTag] = useState('All');
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [tags, setTags] = useState(['All']);

    useEffect(() => {
        if(data){
            // Extract all tags from the fetched blogs and avoid duplicates using Set
            const extractedTags = data.map(blog => blog.attributes.tags).flat().concat('All').reverse();
            setTags([ ...new Set(extractedTags)]); // Avoid duplicates
            setFilteredBlogs(data);
        }
        
      }, [data]);
    
      
    const handleFilter = useCallback((filterParam) => {
        if(!data) return;

        if (filterParam === 'All') {
            setFilteredBlogs(data);
        } else {
            const filtered  = data.filter(blog => blog.attributes.tags.includes(filterParam));
            setFilteredBlogs(filtered );
        }
        setActiveTag(filterParam);

    }, [data]);

    if (isLoading) return <SkeletonBlog />


    if (error) return <ErorrReload />

    return (
        <div className="home__blogs bg-dark-1">
            <SectionHead 
            tag={tag} head={head} link
            href={href} content={content}
        />
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0 br-b">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="home__blogs__filter__form">
                                    <div className="home__blogs__filter__btns d-flex column-gap-2 flex-nowrap overflow-x-scroll py-5">
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