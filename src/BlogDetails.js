import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, isPending} = useFetch(`http://localhost:8000/blogs/${id}`);

    return(
        <div>
            { isPending && <div>Article is loading...</div> }
            { blog && (
                <div className="card my-2" key={blog.id} w-100>
                    <div className="card-body">
                        <h5 className="card-title">{blog.title}</h5>
                        <img src={blog.imgUrl} className="card-img-top" alt={blog.title} height="50%" />
                        <p className="card-text">{blog.body}</p>
                        <h6 className="card-subtitle mt-2 text-muted align-right">Author: {blog.author}</h6>
                    </div>
                </div> )
            }
        </div>
    )
}

export default BlogDetails;