import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import './Header.css';
import HoverDescription from '../hoverdescription/HoverDescription';
import '../hoverdescription/HoverDescription.css';
import {Link, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {menuSizeChange, updateMenuFlag, selectExpanded} from '../../store/menuSlice';

function Header(){
    useEffect(()=>{
        function changeMenuOnClick(event) {
            if(event.matches) {
                document.getElementsByClassName("header__menuonclick")[0].setAttribute("r","14");
                document.getElementsByClassName("header__menuonclick")[0].setAttribute("cx","14");
                document.getElementsByClassName("header__menuonclick")[0].setAttribute("cy","14");
                document.getElementsByClassName("header__onclickgrid")[0].querySelector('svg').setAttribute("height","28");
                document.getElementsByClassName("header__onclickgrid")[0].querySelector('svg').setAttribute("width","28");
            }
            else{
                document.getElementsByClassName("header__menuonclick")[0].setAttribute("r","18");
                document.getElementsByClassName("header__menuonclick")[0].setAttribute("cx","18");
                document.getElementsByClassName("header__menuonclick")[0].setAttribute("cy","18");
                document.getElementsByClassName("header__onclickgrid")[0].querySelector('svg').setAttribute("height","36");
                document.getElementsByClassName("header__onclickgrid")[0].querySelector('svg').setAttribute("width","36"); 
            }
        };

        let media = window.matchMedia("(max-width: 550px)");
        changeMenuOnClick(media);
        media.addEventListener("change",changeMenuOnClick);

        return ()=>{
            media.removeEventListener("change",changeMenuOnClick);
        }  
    }, []);

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

    const expanded = useSelector(selectExpanded);
    const dispatch = useDispatch();

    return (
        <div className="header">
            <div className="header__left">
                <div className="header__onclickgrid" onClick={()=>dispatch(menuSizeChange({expandedFlag:expanded}))}>
                    <svg width="36" height="36">
                        <circle cx="18" cy="18" r="18" fill="white" className="header__menuonclick" />
                    </svg>
                    <MenuIcon className="header__menu" />
                </div>
                <div className="hoverdescriptionparent">
                    <Link to="/" className="hoverdescription"><img className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt="YouTube Home" onClick={()=>dispatch(updateMenuFlag("Home"))} /></Link>
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
                <div className="hoverdescriptionparent hoverdescriptionparenthomerticon">
                    <VideoCallIcon className="header__icon hoverdescription" />
                    <HoverDescription title="Create" />
                </div>
                <div className="hoverdescriptionparent hoverdescriptionparenthomerticon">
                    <NotificationsIcon className="header__icon hoverdescription" />
                    <HoverDescription title="Notifications" />
                </div>
                <Avatar className="header__icons__loginicon" />
            </div>
        </div>
    );
}

export default Header;