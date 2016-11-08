import React from 'react';

class RewardForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.reward || {
            name: "",
            project_id: this.props.params.projectId,
            description: "",
            amount: ""
        };
    }

    componentDidMount() {
        if (this.props.params) {
            this.props.fetchReward(this.props.params.rewardId);
        }
        if (!this.props.loggedIn) {
            this.props.router.push("/login");
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState(newProps.reward || {
          name: "",
          project_id: this.props.params.projectId,
          description: "",
          amount: ""
        });
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.formType === 'new'
            ? this.props.createReward(this.state)
            : this.props.updateReward(this.state);
        this.props.router.replace(`/projects/${this.props.params.projectId}/rewards`);
    }

    render() {
        const text = this.props.formType === 'new'
            ? "Create Reward"
            : "Update Reward";
        return (
            <div className="reward-form-background fade-in">
                <div className="reward-form-container">
                    <h3>{text}</h3>

                    <form onSubmit={this.handleSubmit} className="reward-form-box">
                        <div className="grey-box">
                            <label>Name
                                <input type="text" value={this.state.name} onChange={this.update('name')} className="reward-input"/>

                            </label>
                        </div>
                        <br/>
                        <div className="grey-box">
                            <label>Desc
                                <input type="text" value={this.state.description} onChange={this.update('description')} className="reward-input"/>

                            </label>
                        </div>
                        <br/>
                        <div className="grey-box">
                            <label>Amount
                                <input type="text" value={this.state.amount} onChange={this.update('amount')} className="reward-input"/>

                            </label>
                        </div>
                        <br/>

                        <input type="submit" value={text} className="reward-submit"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default RewardForm;
