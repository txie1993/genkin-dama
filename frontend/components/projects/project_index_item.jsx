import React from 'react';
import {Link, hashHistory} from 'react-router';



const projectLink = id => {
    return (e) => {
        e.preventDefault();
        const url = `/projects/${id}`;
        hashHistory.push(url);
    };
};

const ProjectIndexItem = ({project, router}) => (
    <div className="item-container">
        <div className="item-pic">
            <img src={project.image_url}></img>
        </div>
        <div className="item-desc">
            <h2 onClick={projectLink(project.id)}>{project.title}</h2>
            <p>{project.description}</p>

        </div>
        <div className="item-footer">
            <div className="meter nostripes">
                <span style={{width: "25%"}}></span>
            </div>
        </div>
    </div>
);

export default ProjectIndexItem;
