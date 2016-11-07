import React from 'react';
import RewardIndexItem from './reward_index_item';
import RewardForm from './reward_form';

class RewardIndex extends React.Component {
  componentDidMount() {
    this.props.fetchRewards();
  }

  render () {
    return (
      <div>
      <div>
      <div className="banner"></div>
      <div className="feature-row">
      <div className="feature"></div>
      <div className="feature"></div>
      <div className="feature"></div>
      </div>
        <ul>
          {
            this.props.rewards.map(reward => (
              <RewardIndexItem
                key={reward.id}
                deleteReward={this.props.deleteReward}
                reward={reward} />
            ))
          }
        </ul>
      </div>
      </div>
    );
  }
}

export default RewardIndex;
