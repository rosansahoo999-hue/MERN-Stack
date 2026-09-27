import React from 'react';
import Header from '../common/Header';
import { blogs } from '../Data/blogs';
import { Link } from 'react-router-dom';

export default function Blog() {
    let allBlogs=blogs.map((v,i)=>{
        return(
            <div className='BlogItems' key={i}>
                <h3>{v.title}</h3>
                <p>
                    {v.body}
                </p>
                <button><Link to={`/blog/${v.id}`}>Read more...</Link></button>
            </div>
        )
    })
    return(
        <div>
            <Header />
            <h1>Blog Pages</h1>
            <div className='container'>
                {allBlogs}
            </div>
        </div>
    )
}