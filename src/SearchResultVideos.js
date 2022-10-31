import './SearchResultVideos.css';
import {VideoCardSearch} from './VideoCard';
import ytMeta from './data/youtube-metadata.json';
import TuneIcon from '@mui/icons-material/Tune';
import {useEffect} from 'react';

function SearchResultVideos({menuSize}) {
    useEffect(()=>{
        const handleResize = () => {
            if(window.innerWidth<1300){
                menuSize(true);
            }
            else{
                menuSize(false);
            }
        }

        window.addEventListener("resize",handleResize);

        return ()=>{
            window.removeEventListener("resize",handleResize);
        }
    },[]);

    return (
        <div className="searchresultvideos">
            {/* <h1>{windowWidth}</h1> */}
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