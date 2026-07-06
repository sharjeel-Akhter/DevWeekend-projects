import Videos from '../Data/data.js';

function VideoCards(props) {
    return (
        <>
            {Videos.map((video) => (
            <div className="video-card" key={video.id}>
                <img src={video.thumbnail} alt={video.title} />
                <div className="video-info">
                    <h3>{video.title}</h3>
                    <p>{video.channel}</p>
                    <p>{video.views} views</p>
                </div>
            </div>
            ))}
        </>
    );
}

export default VideoCards;