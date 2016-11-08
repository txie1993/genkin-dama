import React from 'react';
import RewardIndexItem from './reward_index_item';
import {Link, hashHistory} from 'react-router';

class RewardIndex extends React.Component {
    constructor(props) {
        super(props);
        const amt = 0;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateAmt = this.updateAmt.bind(this);
        this.newReward = this.newReward.bind(this);
        this.createAllRewardings = this.createAllRewardings.bind(this);
    }
    componentDidMount() {
        this.props.fetchRewards();
        this.props.fetchProjects();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createBacking({project_id: this.props.project.id, amount: this.amt});
        this.props.router.push(`/projects/${this.props.project.id}`);
    }

    createAllRewardings(id, value) {
        this.props.project.rewards.map((reward) => {
            console.log(reward);
            if (reward.amount <= value)
                this.props.createRewarding({reward_id: reward.id});
            }
        );
    }

    updateAmt() {
        return (e) => {
            this.amt = e.target.value;
        };
    }

    newReward(id) {
        return (e) => {
            e.preventDefault();
            const url = `/projects/${id}/rewards/new`;
            hashHistory.replace(url);
        };
    }

    sortedRewards() {
        return this.props.project.rewards.sort((a, b) => a.amount - b.amount);
    }

    render() {
        if (this.props.project)
            return (
                <div className="reward-index-container">
                <div className="reward-index">
                    <div className="reward-column">
                      <h1>Support this project</h1>
                        <ul className="rewards-list">
                            <li className="reward-item">
                                <h4>Make a pledge without a reward</h4>
                                <div className="hidden" id="custom-pledge">
                                    <form onSubmit={this.handleSubmit}>
                                        <h3>Pledge Amount</h3>
                                        <input type="text" onChange={this.updateAmt()}></input>
                                        <input type="submit" value="Submit"/>
                                    </form>
                                </div>
                            </li>
                            {this.sortedRewards().map(reward => (<RewardIndexItem key={reward.id} reward={reward} createBacking={this.props.createBacking} push={this.props.router.push} createAllRewardings={this.createAllRewardings}/>))}
                        </ul>
                        <button className="reward-button" onClick={this.newReward(this.props.project.id)}>Add Reward</button>
                    </div>
                    <div className="reward-sidebar">
                      <p>Kickstarter is not a store.
It's a way to bring creative projects to life.
Kickstarter does not guarantee projects or investigate a creator's ability to complete their project. It is the responsibility of the project creator to complete their project as promised, and the claims of this project are theirs alone.</p>
                    </div>
                </div>
                </div>
            );
        else {
            return (
                <div>Loading...</div>
            );
        }
    }
}

export default RewardIndex;
