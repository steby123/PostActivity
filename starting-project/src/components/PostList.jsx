import classes from './PostList.module.css';
import Post from './Post';
import { useLoaderData } from 'react-router-dom';

const PostList = () => {
    const post = useLoaderData();

    return(
        <>
            {post.length > 0 && (
                <ul className={classes.posts}>
                    {post.map((posts) => (
                        <Post 
                            key={posts.body} 
                            id={posts.id}
                            author={posts.author} 
                            body={posts.body}
                        />
                    ))}
                </ul>
            )}   
            {post.length === 0 && (
                <div style={{textAlign:'center', color:'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    )
}

export default PostList;