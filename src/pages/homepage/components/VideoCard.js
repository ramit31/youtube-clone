import React from 'react';
import Avatar from '@mui/material/Avatar';
import './VideoCard.css';
import HoverDescription from '../../../components/hoverdescription/HoverDescription';
import '../../../components/hoverdescription/HoverDescription.css';
import './VideoCardLarge.css';
import {formatViewsCount, timeFormat, dayFormat} from '../../../utils/ytUtils';

function VideoCard(props) {
        return (<a href={props.videoLink} className={`videocard${props.cssclass}`}>
                    <div className={`videocard${props.cssclass}__videothumbnail`}>
                        <img src={props.videoThumbnail.url} alt={props.title} />
                        <div><span>{timeFormat(props.duration)}</span></div>
                    </div>
                    <div className="videocard__info">
                        <a href={props.channelLink} className="videocard__channelthumbnail">
                            <Avatar className={`videocard${props.cssclass}__avatar`} alt={props.channelTitle} src={props.channelThumbnail.url} />
                        </a>
                        <div className={`videocard${props.cssclass}__channeltitlestats`}>
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

export {VideoCard};