import React from 'react';
import RewardIndexItem from './reward_index_item';

class RewardIndex extends React.Component {
    constructor(props) {
        super(props);
        const amt = 0;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateAmt = this.updateAmt.bind(this);
    }
    componentDidMount() {
        this.props.fetchRewards();
        this.props.fetchProjects();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createBacking({project_id: this.props.project.id, amount: this.amt});
        this.props.router.push("/");
    }

    updateAmt() {
        return (e) => {
            this.amt = e.target.value;
        };
    }

    render() {
      if (this.props.project)
        return (
            <div>
                <h1>Choose a Reward Level</h1>
                <ul>
                    <li>
                        <h4>Make a pledge without a reward</h4>
                        <div className="hidden" id="custom-pledge">
                            <form onSubmit={this.handleSubmit}>
                                <h3>Pledge Amount</h3>
                                <input type="text" onChange={this.updateAmt()}></input>
                                <input type="submit" value="Submit"/>
                            </form>
                        </div>
                    </li>
                    {this.props.project.rewards.map(reward => (<RewardIndexItem key={reward.id} reward={reward} createBacking={this.props.createBacking}/>))}
                </ul>
            </div>
        );
        else {
          return (<div>Loading...</div>);
        }
    }
}

export default RewardIndex;
