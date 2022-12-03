import React from 'react';
import Avatar from '@mui/material/Avatar';
import HoverDescription from '../../../components/hoverdescription/HoverDescription';
import '../../../components/hoverdescription/HoverDescription.css';
import {formatViewsCount, timeFormat, dayFormat, singleLineDescription} from '../../../utils/ytUtils';
import './VideoCardSearch.css';

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

export {VideoCardSearch};