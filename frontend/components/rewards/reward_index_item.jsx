import React from 'react';
import {Link, hashHistory} from 'react-router';



const RewardIndexItem = ({reward, router, push, createBacking, createAllRewardings}) => {
    return (
        <li className="reward-item grow" onClick={() => {
              createBacking({project_id: reward.project_id, amount: reward.amount});
              createAllRewardings(reward.id, reward.amount);
              push(`/projects/${reward.project_id}`);
            }}>
            <div className="reward-content">
            <h2>${reward.amount} or more</h2>
            <h3>{reward.name}</h3>
            <p>{reward.description}</p>
            </div>
        </li>
    );
};

export default RewardIndexItem;
