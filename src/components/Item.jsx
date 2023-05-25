import { AiTwotoneLike, AiFillDislike } from 'react-icons/ai';

function Item({video}){
    return(
        <>
            <iframe
                width="919"
                height="525"
                src={video.embedUrl}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h2>{video.title}</h2>
            <p>{video.views} | Uploaded {video.createdAt}</p>
            <h2>{video.comments.map((comment)=>{
                return(
                    <div>
                        <h3>{comment.user}</h3>
                        <h5>{comment.user}</h5>
                    </div>
                )
            })}
            </h2>

            <button><AiTwotoneLike />Like</button>
            <button><AiFillDislike/>Dislike</button>

        </>
    )
}

export default Item;