import React from 'react';
import {Link, hashHistory} from 'react-router';



const RewardIndexItem = ({reward, router, push, createBacking, createAllRewardings}) => {
    return (
        <li>
            <Link to={`/backing/new`}>
                {reward.name}
            </Link>&nbsp;
            <button onClick={
                () => {
                  createBacking({project_id: reward.project_id, amount: reward.amount});
                  createAllRewardings(reward.id, reward.amount);
                  push(`/projects/${reward.project_id}`);
                }
              }>Pledge ${reward.amount}</button>

        </li>
    );
};

export default RewardIndexItem;
