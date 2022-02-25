import { React}  from 'react';
import { Link } from 'react-router-dom';

const Blog = (props) => {
    const {blogs, title, deleteBlogItem} = props;

    return(
        <div>
        <h1 className="text-center">{title}</h1>
        <div className="d-flex justify-content-evenly flex-wrap">
            { blogs.map(item => (
                <div className="card my-2" key={item.id} style={{ width: '300px'}}>
                <img src={item.imgUrl} className="card-img-top" alt={item.title} height="50%" />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <div className="d-flex justify-content-between">
                        <Link to={`/blogs/${item.id}`} className="btn btn-primary">Read more..</Link>
                        <button onClick={() => deleteBlogItem(item.id)} className="btn btn-primary">Delete blog</button>
                    </div>
                    <h6 className="card-subtitle mt-2 text-muted align-right">{item.author}</h6>
                    </div>
                </div> ))
            }
        </div>
        </div>
    )
}

export default Blog;