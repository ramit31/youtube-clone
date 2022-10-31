import './SidebarRow.css';
import './SidebarRowMini.css';
import React from 'react';
import {Link} from 'react-router-dom';

class SidebarRow extends React.Component {
    render() {
    const IconComponent = this.props.icon;

    return (<Link to={this.props.linkTo}><div 
    className={`sidebarrow ${this.props.selected && "selected"}`} 
    onClick={()=>this.props.updateMenu(this.props.index)}>
        <IconComponent className="sidebarrow__icon" />
        <h2 className="sidebarrow__title">{this.props.title}</h2>
    </div></Link>);
    }
}

class SidebarRowMini extends React.Component {
    render() {
    const IconComponent = this.props.icon;

    return (<Link to={this.props.linkTo}><div 
    className={`sidebarrowmini ${this.props.selected && "selected"}`} 
    onClick={()=>this.props.updateMenu(this.props.index)}>
        <IconComponent className="sidebarrowmini__icon" />
        <h2 className="sidebarrowmini__title">{this.props.title}</h2>
    </div></Link>);
    }
}

export {SidebarRow, SidebarRowMini};