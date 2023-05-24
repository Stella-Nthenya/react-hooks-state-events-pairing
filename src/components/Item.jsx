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
        </>
    )
}

export default Item;