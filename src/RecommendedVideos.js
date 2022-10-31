import './RecommendedVideos.css';
import {VideoCard} from './VideoCard';
import ytMeta from './data/youtube-metadata.json';
import {useEffect} from 'react';

function RecommendedVideos(props) {
    useEffect(()=>{
        const handleResize = () => {
            if(window.innerWidth<1300){
                props.menuSize(true);
            }
            else{
                props.menuSize(false);
            }
        }

        window.addEventListener("resize",handleResize);

        return ()=>{
            window.removeEventListener("resize",handleResize);
        }
    },[]);
    
    return (
        <div className="recommendedVideos">
            {ytMeta.map(element=>{
            return <VideoCard title={element.title} videoThumbnail={element.thumbnail} channelTitle={element.channelTitle}
            duration={element.duration} viewCount={element.viewCount} channelThumbnail={element.channelThumbnail}
            channelLink={element.channelLink} videoLink={element.videoLink} published={element.published}
            expanded={props.expanded} />;
            })}
        </div>
    );
}

export default RecommendedVideos;