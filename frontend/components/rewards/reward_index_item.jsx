import React from 'react';
import {Link, hashHistory} from 'react-router';

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const RewardIndexItem = ({reward, router, push, createBacking, createRewarding}) => {
    return (
        <li className="reward-item grow" onClick={() => {
              createBacking({project_id: reward.project_id, amount: reward.amount});
              createRewarding({reward_id: reward.id});
              push(`/projects/${reward.project_id}`);
            }}>
            <div className="reward-content">
            <h2>${numberWithCommas(reward.amount)} or more</h2>
            <h3>{reward.name}</h3>
            <p>{reward.description}</p>
            </div>
        </li>
    );
};

export default RewardIndexItem;
