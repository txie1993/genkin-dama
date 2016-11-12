import React from 'react';
import {Link, hashHistory} from 'react-router';



const projectLink = id => {
    return (e) => {
        e.preventDefault();
        const url = `/projects/${id}`;
        hashHistory.push(url);
    };
};

const ProjectIndexItem = ({project, router, displayPercentage}) => (
    <div className="item-container">
        <div className="item-pic">
            <img onClick={projectLink(project.id)} src={project.image_url}></img>
        </div>
        <div className="item-desc">
            <h2 onClick={projectLink(project.id)}>{project.title}</h2>
            <p className="item-desc-long">{project.description}</p>

        </div>
        <div className="item-footer">
            <div className="meter nostripes">
                <span style={{width: `${displayPercentage}%`}}></span>
            </div>
            <div>
              <h5>{project.percent_complete}% completed, {project.remaining_days} days left</h5>

            </div>
        </div>
    </div>
);

export default ProjectIndexItem;
