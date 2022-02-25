import { React}  from 'react';
import Blog from './Blog';
import useFetch from './useFetch';

    const Home =()=> {

    const {data: blogs, setData: setBlogs, isPending} = useFetch('http://localhost:8000/blogs');

    const deleteBlogItem = (itemId) => {
        const newBlogList = blogs.filter(blog => blog.id !== itemId);
        setBlogs(newBlogList);
    }

    return (
        <div className="home">
            <h2 className="mt-5 mb-3">home page</h2>
            <p>And some cool content here...</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae necessitatibus voluptatum dolore neque perferendis minima alias praesentium ducimus cumque a ad magnam odit eum iusto ut soluta, dolor consequatur cupiditate?</p>
            { isPending && <p>Loading..</p> }
            { blogs && <Blog blogs={blogs} title={'Blog List'} deleteBlogItem={deleteBlogItem} />}
            <hr />
            { blogs ? <Blog blogs={blogs.filter( blog => blog.author === 'Alex' )} title={'Alex\'s Blog'} deleteBlogItem={deleteBlogItem} /> : "Blogs are loading.."}
        </div>
    )
} 

export default Home;