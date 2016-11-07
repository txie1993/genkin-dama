import React from 'react';
import {Link, hashHistory} from 'react-router';

const editLink = id => {
    return (e) => {
        e.preventDefault();
        const url = `/rewards/${id}/edit`;
        hashHistory.push(url);
    };
};

const RewardIndexItem = ({reward, router, deleteReward}) => (
    <li>

        <div>
            <div>
                <Link to={`/rewards/${reward.id}`}>
                    {reward.title}
                </Link>&nbsp;
                <button onClick={editLink(reward.id)}>Edit</button>&nbsp;
                <button onClick={() => deleteReward(reward.id)}>Delete</button>
            </div>
        </div>

    </li>
);

export default RewardIndexItem;
