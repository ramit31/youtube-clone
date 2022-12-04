import './RecommendedVideos.css';
import {VideoCard} from './components/VideoCard';
import ytMeta from '../../data/youtube-metadata.json';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { menuSizeChange, selectExpanded } from '../../store/menuSlice';
import {getId} from '../../utils/ytUtils';

function RecommendedVideos() {
    const dispatch = useDispatch();
    const expanded = useSelector(selectExpanded);

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
            {expanded?
                ytMeta.map(element=>{
                return <VideoCard title={element.title} videoThumbnail={element.thumbnail} channelTitle={element.channelTitle}
                duration={element.duration} viewCount={element.viewCount} channelThumbnail={element.channelThumbnail}
                channelLink={element.channelLink} videoLink={element.videoLink} published={element.published}
                cssclass={""} key={getId(element.videoLink)} />;
                })
            :
                ytMeta.map(element=>{
                return <VideoCard title={element.title} videoThumbnail={element.thumbnail} channelTitle={element.channelTitle}
                duration={element.duration} viewCount={element.viewCount} channelThumbnail={element.channelThumbnail}
                channelLink={element.channelLink} videoLink={element.videoLink} published={element.published}
                cssclass={"large"} key={getId(element.videoLink)} />;
                })
            }
        </div>
    );
}

export default RecommendedVideos;