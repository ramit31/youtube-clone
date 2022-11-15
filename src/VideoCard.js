import React from 'react';
import Avatar from '@mui/material/Avatar';
import './VideoCard.css';
import HoverDescription from './HoverDescription';
import './HoverDescription.css';
import './VideoCardLarge.css';
import {formatViewsCount, timeFormat, dayFormat, singleLineDescription} from './ytUtils';
import './VideoCardSearch.css';
import { useSelector } from 'react-redux';
import {selectExpanded} from './data/menuSlice';

function VideoCard(props) {
    const expanded = useSelector(selectExpanded);

    if(expanded){
        return (<a href={props.videoLink} className="videocard">
                    <div className="videocard__videothumbnail">
                        <img src={props.videoThumbnail.url} alt={props.title} />
                        <div><span>{timeFormat(props.duration)}</span></div>
                    </div>
                    <div className="videocard__info">
                        <a href={props.channelLink} className="videocard__channelthumbnail">
                            <Avatar className="videocard__avatar" alt={props.channelTitle} src={props.channelThumbnail.url} />
                        </a>
                        <div className="videocard__channeltitlestats">
                            <div className="hoverdescriptionparent">
                                <h4 className="hoverdescription">{props.title}</h4>
                                <HoverDescription title={props.title} />
                            </div>
                            <div className="hoverdescriptionparent">
                                <a href={props.channelLink} className="hoverdescription">{props.channelTitle}</a>
                                <HoverDescription title={props.channelTitle} />
                            </div>
                            <p>{formatViewsCount(props.viewCount,true,0)} · {dayFormat(props.published)}</p>
                        </div>
                    </div>
            </a>);
    }
    else{
        return (<a href={props.videoLink} className="videocardlarge">
                    <div className="videocardlarge__videothumbnail">
                        <img src={props.videoThumbnail.url} alt={props.title} />
                        <div><span>{timeFormat(props.duration)}</span></div>
                    </div>
                    <div className="videocard__info">
                        <a href={props.channelLink} className="videocard__channelthumbnail">
                            <Avatar className="videocardlarge__avatar" alt={props.channelTitle} src={props.channelThumbnail.url} />
                        </a>
                        <div className="videocardlarge__channeltitlestats">
                            <div className="hoverdescriptionparent">
                                <h4 className="hoverdescription">{props.title}</h4>
                                <HoverDescription title={props.title} />
                            </div>
                            <div className="hoverdescriptionparent">
                                <a href={props.channelLink} className="hoverdescription">{props.channelTitle}</a>
                                <HoverDescription title={props.channelTitle} />
                            </div>
                            <p>{formatViewsCount(props.viewCount,true,0)} · {dayFormat(props.published)}</p>
                        </div>
                    </div>
                </a>);
    }
}

class VideoCardSearch extends React.Component {
    render(){
        return (<a href={this.props.videoLink} className="videocardsearch">
                <div className="videocardsearch__videothumbnail">
                    <img src={this.props.videoThumbnail.url} alt={this.props.title} />
                    <div><span>{timeFormat(this.props.duration)}</span></div>
                </div>
                <div className="videocardsearch__info">
                    <div className="hoverdescriptionparent videocardsearch__videotitle">
                        <p className="hoverdescription">{this.props.title}</p>
                        <HoverDescription title={this.props.title} />
                    </div>
                    <p className="videocardsearch__stats">{formatViewsCount(this.props.viewCount,true,0)} · {dayFormat(this.props.published)}</p>
                    <div className="videocardsearch__channelinfo hoverdescriptionparent">
                        <a href={this.props.channelLink}>
                            <Avatar className="videocardsearch__avatar" alt={this.props.channelTitle} src={this.props.channelThumbnail.url} />
                        </a>
                        <a href={this.props.channelLink} className="hoverdescription videocardsearch__channeltitle">{this.props.channelTitle}</a>
                        <HoverDescription title={this.props.channelTitle} />
                    </div>
                    <div className="hoverdescriptionparent">
                        <p className="videocardsearch__description hoverdescription">{singleLineDescription(this.props.description)}</p>
                        <HoverDescription title="From the video description" />
                    </div>
                </div>
        </a>);
    }
}

export {VideoCard, VideoCardSearch};