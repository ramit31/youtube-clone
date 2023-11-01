import './Sidebar.css';
import {SidebarRow, SidebarRowMini} from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';
import {selectExpanded} from '../../store/menuSlice';

function Sidebar() {
    const expanded = useSelector(selectExpanded);

    if(expanded){
        return (
            <div className="sidebar">
                <div className="sidebar__sticky">
                    <SidebarRow linkTo="/" icon={HomeIcon} title="Home" />
                    <SidebarRow linkTo="/trending" icon={WhatshotIcon} title="Trending" />
                    <SidebarRow linkTo="/subscription" icon={SubscriptionsIcon} title="Subscriptions" />
                    <hr />
                    <SidebarRow linkTo="/library" icon={VideoLibraryIcon} title="Library" />
                    <SidebarRow linkTo="/history" icon={HistoryIcon} title="History" />
                    <SidebarRow linkTo="/your videos" icon={SlideshowIcon} title="Your videos" />
                    <SidebarRow linkTo="/watch later" icon={WatchLaterIcon} title="Watch later" />
                    <SidebarRow linkTo="/liked videos" icon={ThumbUpIcon} title="Liked videos" />
                    <SidebarRow linkTo="" icon={ExpandMoreIcon} title="Show more" />
                    <hr />
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="sidebarmini">
                <div className="sidebar__sticky">
                    <SidebarRowMini linkTo="/" icon={HomeIcon} title="Home" />
                    <SidebarRowMini linkTo="/trending" icon={WhatshotIcon} title="Trending" />
                    <SidebarRowMini linkTo="/subscription" icon={SubscriptionsIcon} title="Subscriptions" />
                    <SidebarRowMini linkTo="/library" icon={VideoLibraryIcon} title="Library" />
                </div>
            </div>
        );
    }
}

export default Sidebar;