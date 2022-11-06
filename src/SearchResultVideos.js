import './SearchResultVideos.css';
import {VideoCardSearch} from './VideoCard';
import ytMeta from './data/youtube-metadata.json';
import TuneIcon from '@mui/icons-material/Tune';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { menuSizeChange } from './data/menuSlice';

function SearchResultVideos() {
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
        <div className="searchresultvideos">
            <div className="searchresultvideos__filter">
                <TuneIcon className="searchresultvideos__icon" />
                <h4>FILTERS</h4>
            </div>
            <hr />
            {ytMeta.map(element=>{
            return <VideoCardSearch title={element.title} videoThumbnail={element.thumbnail} channelTitle={element.channelTitle}
            duration={element.duration} viewCount={element.viewCount} channelThumbnail={element.channelThumbnail}
            channelLink={element.channelLink} videoLink={element.videoLink} published={element.published}
            description={element.description} />;
            })}
        </div>
    );
}

export default SearchResultVideos;