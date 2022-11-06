import './SidebarRow.css';
import './SidebarRowMini.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {updateMenuFlag, selectMenuFlag} from './data/menuSlice';

function SidebarRow(props) {
    const IconComponent = props.icon;
    const menuFlag = useSelector(selectMenuFlag);
    const dispatch = useDispatch();

    return (<Link to={props.linkTo}><div 
    className={`sidebarrow ${(menuFlag===props.title) && "selected"}`} 
    onClick={()=>dispatch(updateMenuFlag(props.title))}>
        <IconComponent className="sidebarrow__icon" />
        <h2 className="sidebarrow__title">{props.title}</h2>
    </div></Link>);
}

function SidebarRowMini(props) {
    const IconComponent = props.icon;
    const menuFlag = useSelector(selectMenuFlag);
    const dispatch = useDispatch();

    return (<Link to={props.linkTo}><div 
    className={`sidebarrowmini ${(menuFlag===props.title) && "selected"}`} 
    onClick={()=>dispatch(updateMenuFlag(props.title))}>
        <IconComponent className="sidebarrowmini__icon" />
        <h2 className="sidebarrowmini__title">{props.title}</h2>
    </div></Link>);
}

export {SidebarRow, SidebarRowMini};