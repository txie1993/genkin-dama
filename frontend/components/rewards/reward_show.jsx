import React from 'react';
import {Link} from 'react-router';

class RewardShow extends React.Component {
    componentDidMount() {
        this.props.fetchReward(this.props.params.rewardId);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value)
            this.props.fetchReward(nextProps.params.rewardId);
        }

    render() {
        const reward = this.props.reward;
        if (!reward) {
            return <div>Loading...</div>;
        }

        return (
            <div className="reward-show-container">
                <div className="reward-show-box">
                    <div className="reward-title">
                        <h2>{reward.title}</h2>
                        <p>by {reward.creator.username}</p>
                    </div>
                    <div className="reward-body">
                        <div className="reward-row">
                            <div className="reward-left" style={{backgroundImage: `url(${reward.image_url})`}}>
                            </div>
                            <div className="reward-right">
                                <div className="reward-right-backers">
                                    <h1>{reward.num_backers}</h1>
                                    <p>backers</p>
                                </div>
                                <div className="reward-right-goal">
                                    <h1>${reward.collected_funds}</h1>
                                    <p>pledged of ${reward.funding_goal}</p>
                                </div>
                                <div className="reward-right-time">
                                    <h1>{reward.remaining_days}</h1>
                                    <p>days to go</p>
                                </div>
                            </div>
                        </div>
                        <div className="reward-row-2">
                            <div className="reward-left-2">
                              <p>{reward.description}</p>
                            </div>
                            <div className="reward-right-2">
                              <button>Back this Reward</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RewardShow;
