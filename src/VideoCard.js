import React from 'react';
import Avatar from '@mui/material/Avatar';
import './VideoCard.css';
import HoverDescription from './HoverDescription';
import './HoverDescription.css';
import './VideoCardLarge.css';
import {formatViewsCount, timeFormat, dayFormat, singleLineDescription} from './ytUtils';
import './VideoCardSearch.css';

class VideoCard extends React.Component {
    render(){
        if(this.props.expanded){
            return (<a href={this.props.videoLink} className="videocard">
                        <div className="videocard__videothumbnail">
                            <img src={this.props.videoThumbnail.url} alt={this.props.title} />
                            <span>{timeFormat(this.props.duration)}</span>
                        </div>
                        <div className="videocard__info">
                            <a href={this.props.channelLink} className="videocard__channelthumbnail">
                                <Avatar className="videocard__avatar" alt={this.props.channelTitle} src={this.props.channelThumbnail.url} />
                            </a>
                            <div className="videocard__channeltitlestats">
                                <div className="hoverdescriptionparent">
                                    <h4 className="hoverdescription">{this.props.title}</h4>
                                    <HoverDescription title={this.props.title} />
                                </div>
                                <div className="hoverdescriptionparent">
                                    <a href={this.props.channelLink} className="hoverdescription">{this.props.channelTitle}</a>
                                    <HoverDescription title={this.props.channelTitle} />
                                </div>
                                <p>{formatViewsCount(this.props.viewCount,true,0)} · {dayFormat(this.props.published)}</p>
                            </div>
                        </div>
                </a>);
        }
        else{
            return (<a href={this.props.videoLink} className="videocardlarge">
                        <div className="videocardlarge__videothumbnail">
                            <img src={this.props.videoThumbnail.url} alt={this.props.title} />
                            <span>{timeFormat(this.props.duration)}</span>
                        </div>
                        <div className="videocard__info">
                            <a href={this.props.channelLink} className="videocard__channelthumbnail">
                                <Avatar className="videocardlarge__avatar" alt={this.props.channelTitle} src={this.props.channelThumbnail.url} />
                            </a>
                            <div className="videocardlarge__channeltitlestats">
                                <div className="hoverdescriptionparent">
                                    <h4 className="hoverdescription">{this.props.title}</h4>
                                    <HoverDescription title={this.props.title} />
                                </div>
                                <div className="hoverdescriptionparent">
                                    <a href={this.props.channelLink} className="hoverdescription">{this.props.channelTitle}</a>
                                    <HoverDescription title={this.props.channelTitle} />
                                </div>
                                <p>{formatViewsCount(this.props.viewCount,true,0)} · {dayFormat(this.props.published)}</p>
                            </div>
                        </div>
                    </a>);
        }
    }
}

class VideoCardSearch extends React.Component {
    render(){
        return (<a href={this.props.videoLink} className="videocardsearch">
                <div className="videocardsearch__videothumbnail">
                    <img src={this.props.videoThumbnail.url} alt={this.props.title} />
                    <span>{timeFormat(this.props.duration)}</span>
                </div>
                <div className="videocardsearch__info">
                    <div className="hoverdescriptionparent videocardsearch__videotitle">
                        <p className="hoverdescription">{this.props.title}</p>
                        <HoverDescription title={this.props.title} />
                    </div>
                    <p className="videocardsearch__stats">{formatViewsCount(this.props.viewCount,true,0)} · {dayFormat(this.props.published)}</p>
                    <div className="videocardsearch__channelinfo">
                        <a href={this.props.channelLink}>
                            <Avatar className="videocardsearch__avatar" alt={this.props.channelTitle} src={this.props.channelThumbnail.url} />
                        </a>
                        <div className="hoverdescriptionparent">
                            <a href={this.props.channelLink} className="hoverdescription videocardsearch__channeltitle">{this.props.channelTitle}</a>
                            <HoverDescription title={this.props.channelTitle} />
                        </div>
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