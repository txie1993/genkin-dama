import React from 'react';
import {Link, hashHistory} from 'react-router';

const RewardIndexItem = ({reward, router, createBacking}) => {
  console.log(reward);
    return (
        <li>
            <Link to={`/backing/new`}>
                {reward.name}
            </Link>&nbsp;
            <button onClick={() => createBacking({project_id: reward.project_id, amount: reward.amount})}>Pledge ${reward.amount}</button>

        </li>
    );
};

export default RewardIndexItem;
