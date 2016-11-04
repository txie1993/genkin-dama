import React from 'react';
import {Link, hashHistory} from 'react-router';

const editLink = id => {
    return (e) => {
        e.preventDefault();
        const url = `/projects/${id}/edit`;
        hashHistory.push(url);
    };
};

const ProjectIndexItem = ({project, router, deleteProject}) => (
    <li>

        <div>
            <div>
                <Link to={`/projects/${project.id}`}>
                    {project.title}
                </Link>&nbsp;
                <button onClick={editLink(project.id)}>Edit</button>&nbsp;
                <button onClick={() => deleteProject(project.id)}>Delete</button>
            </div>
        </div>

    </li>
);

export default ProjectIndexItem;
