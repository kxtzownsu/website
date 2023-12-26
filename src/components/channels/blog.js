import React, { lazy } from 'react';
const BlogViewer = lazy(() => import('./BlogViewer'));

function Blog() {
    return (
        <div className="text-white flex flex-col items-center mx-auto pt-10">
            <h1 className="text-4xl">kxtz' shitty blog posts</h1>
            <p className="text-2xl">me rambling about some dumb shit that came to my mind</p>
            <div className="bg-gray-600 h-2 w-8/12 my-2 mx-auto rounded"></div>
            <BlogViewer />
        </div>
    );
};

export default Blog;
