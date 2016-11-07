import React from 'react';
import {Link, hashHistory} from 'react-router';

const editLink = id => {
    return (e) => {
        e.preventDefault();
        const url = `/backings/${id}/edit`;
        hashHistory.push(url);
    };
};

const BackingIndexItem = ({backing, router, deleteBacking}) => (
    <li>

        <div>
            <div>
                <Link to={`/backings/${backing.id}`}>
                    {backing.title}
                </Link>&nbsp;
                <button onClick={editLink(backing.id)}>Edit</button>&nbsp;
                <button onClick={() => deleteBacking(backing.id)}>Delete</button>
            </div>
        </div>

    </li>
);

export default BackingIndexItem;
