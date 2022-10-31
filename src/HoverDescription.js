import './HoverDescription.css';

function HoverDescription({title}) {
    return <span className={`hoverdescriptionhidden ${title==="From the video description" && "hoverdescriptionhiddensearch"}`}>
    {title}
    </span>;
}

export default HoverDescription;