import './Video.css';

const Video = () => {
    return (
        <div className='background-video'>
            <div className='video'>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/wcVVXUV0YUY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default Video;