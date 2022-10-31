import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import './Header.css';
import HoverDescription from './HoverDescription';
import './HoverDescription.css';
import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';

function Header(props){
    const [inputSearch,setInputSearch]=useState('');
    let history=useNavigate();

    const keyPressHandler = (e) => {
        if (e.key==='Enter' && inputSearch) {
          // pressed enter
          history(`/search/${inputSearch}`);
        }
    };

    const searchClickHandler = () => {
        if (inputSearch) {
            // search button clicked
            history(`/search/${inputSearch}`);
          } 
    }

    return (
        <div className="header">
            <div className="header__left">
                <div className="header__onclickgrid" onClick={()=>props.menuSize(props.expanded)}>
                    <svg width="36" height="36">
                        <circle cx="18" cy="18" r="18" fill="white" className="header__menuonclick" />
                    </svg>
                    <MenuIcon className="header__menu" />
                </div>
                <div className="hoverdescriptionparent">
                    <Link to="/" className="hoverdescription"><img className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt="YouTube Home" onClick={()=>props.updateMenu(0)} /></Link>
                    <HoverDescription title="YouTube Home" />
                </div>
            </div>
            <div className="header__input">
                <input value={inputSearch} onChange={e=>setInputSearch(e.target.value)} onKeyDown={keyPressHandler} placeholder="Search" type="text"/>
                <div className="hoverdescriptionparent searchbuttonelement">
                    <button type="button" className="header__inputButtonBg hoverdescription" onClick={searchClickHandler}>
                        <SearchIcon className="header__inputButton" />
                    </button>
                    <HoverDescription title="Search" />
                </div>
            </div>
            <div className="header__icons">
                <div className="hoverdescriptionparent">
                    <VideoCallIcon className="header__icon hoverdescription" />
                    <HoverDescription title="Create" />
                </div>
                <div className="hoverdescriptionparent">
                    <NotificationsIcon className="header__icon hoverdescription" />
                    <HoverDescription title="Notifications" />
                </div>
                <Avatar />
            </div>
        </div>
    );
}

export default Header;