function Blog() {
    return (
      <div className=" h-screen w-1/2 p-10">
        {/* First Blog Post */}
        <div className="border border-primary p-4 mb-4 text-center rounded">
          <h1 className="text-primary">First Blog</h1>
          <p className="text-primary">Description of the blog...</p>
          <p className="text-gray-400"><i>12/25/23</i></p>
        </div>
  
        {/* Second Blog Post */}
        <div className="border border-primary p-4 text-center rounded">
          <h1 className="text-primary">Second Blog</h1>
          <p className="text-primary">Description of the blog...</p>
          <p className="text-gray-400"><i>12/25/23</i></p>
        </div>
      </div>
    );
  }
  
  export default Blog;
  