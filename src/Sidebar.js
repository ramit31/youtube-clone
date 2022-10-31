import React from 'react';
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

class Sidebar extends React.Component {
    render() {
        if(this.props.expanded){
            return (
                <div className="sidebar">
                    <SidebarRow linkTo="/" selected={this.props.menuFlags[0]} index={0} icon={HomeIcon} title="Home" updateMenu={this.props.updateMenu} />
                    <SidebarRow linkTo="/trending" selected={this.props.menuFlags[1]} index={1} icon={WhatshotIcon} title="Trending" updateMenu={this.props.updateMenu} />
                    <SidebarRow linkTo="/subscription" selected={this.props.menuFlags[2]} index={2} icon={SubscriptionsIcon} title="Subscriptions" updateMenu={this.props.updateMenu} />
                    <hr />
                    <SidebarRow linkTo="/library" selected={this.props.menuFlags[3]} index={3} icon={VideoLibraryIcon} title="Library" updateMenu={this.props.updateMenu} />
                    <SidebarRow linkTo="/history" selected={this.props.menuFlags[4]} index={4} icon={HistoryIcon} title="History" updateMenu={this.props.updateMenu} />
                    <SidebarRow linkTo="/your videos" selected={this.props.menuFlags[5]} index={5} icon={SlideshowIcon} title="Your videos" updateMenu={this.props.updateMenu} />
                    <SidebarRow linkTo="/watch later" selected={this.props.menuFlags[6]} index={6} icon={WatchLaterIcon} title="Watch later" updateMenu={this.props.updateMenu} />
                    <SidebarRow linkTo="/liked videos" selected={this.props.menuFlags[7]} index={7} icon={ThumbUpIcon} title="Liked videos" updateMenu={this.props.updateMenu} />
                    <SidebarRow linkTo="" selected={this.props.menuFlags[8]} index={8} icon={ExpandMoreIcon} title="Show more" updateMenu={this.props.updateMenu} />
                    <hr />
                </div>
            );
        }
        else{
            return (
                <div className="sidebarmini">
                    <SidebarRowMini linkTo="/" selected={this.props.menuFlags[0]} index={0} icon={HomeIcon} title="Home" updateMenu={this.props.updateMenu} />
                    <SidebarRowMini linkTo="/trending" selected={this.props.menuFlags[1]} index={1} icon={WhatshotIcon} title="Trending" updateMenu={this.props.updateMenu} />
                    <SidebarRowMini linkTo="/subscription" selected={this.props.menuFlags[2]} index={2} icon={SubscriptionsIcon} title="Subscriptions" updateMenu={this.props.updateMenu} />
                    <SidebarRowMini linkTo="/library" selected={this.props.menuFlags[3]} index={3} icon={VideoLibraryIcon} title="Library" updateMenu={this.props.updateMenu} />
                </div>
            );
        }
    }
}

export default Sidebar;