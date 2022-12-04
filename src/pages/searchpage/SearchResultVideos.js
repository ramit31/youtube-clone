import './SearchResultVideos.css';
import {VideoCardSearch} from './components/VideoCardSearch';
import ytMeta from '../../data/youtube-metadata.json';
import TuneIcon from '@mui/icons-material/Tune';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { menuSizeChange } from '../../store/menuSlice';
import {getId} from '../../utils/ytUtils';

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
            description={element.description} key={getId(element.videoLink)} />;
            })}
        </div>
    );
}

export default SearchResultVideos;