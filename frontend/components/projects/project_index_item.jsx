import React from 'react';
import {Link, hashHistory} from 'react-router';

const ProjectIndexItem = ({project, router, deleteProject}) => (
    <li>

        <div>
            <div>
                <Link to={`/projects/${project.id}`}>
                    {project.title}
                </Link>&nbsp;

            </div>
        </div>

    </li>
);

export default ProjectIndexItem;
