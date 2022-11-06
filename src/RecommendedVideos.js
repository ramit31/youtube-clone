import './RecommendedVideos.css';
import {VideoCard} from './VideoCard';
import ytMeta from './data/youtube-metadata.json';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { menuSizeChange } from './data/menuSlice';

function RecommendedVideos() {
    const dispatch = useDispatch();

    useEffect(()=>{
        const handleResize = () => {
            if(window.innerWidth<1300){
                dispatch(menuSizeChange({expandedFlag:true}));
            }
            else{
                dispatch(menuSizeChange({expandedFlag:false}));
            }
        }

        window.addEventListener("resize",handleResize);

        return ()=>{
            window.removeEventListener("resize",handleResize);
        }        
    },[dispatch]);
    
    return (
        <div className="recommendedVideos">
            {ytMeta.map(element=>{
            return <VideoCard title={element.title} videoThumbnail={element.thumbnail} channelTitle={element.channelTitle}
            duration={element.duration} viewCount={element.viewCount} channelThumbnail={element.channelThumbnail}
            channelLink={element.channelLink} videoLink={element.videoLink} published={element.published} />;
            })}
        </div>
    );
}

export default RecommendedVideos;