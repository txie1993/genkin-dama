import React from 'react';

class BackingForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.backing || {
            project_id: "",
            amount: "",
            message: ""
        };
    }

    componentDidMount() {
        if (this.props.params) {
            this.props.fetchBacking(this.props.params.backingId);
        }
        if (!this.props.loggedIn) {
            this.props.router.push("/login");
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState(newProps.backing || {
          project_id: "",
          amount: "",
          message: ""
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
            ? this.props.createBacking(this.state)
            : this.props.updateBacking(this.state);
        this.props.router.push("/");
    }

    render() {
        const text = this.props.formType === 'new'
            ? "Back This Project"
            : "Update Backing";
        return (
            <div className="backing-form-background fade-in">
                <div className="backing-form-container">
                    <h3>{text}</h3>

                    <form onSubmit={this.handleSubmit} className="backing-form-box">

                        <div className="grey-box">
                            <label>Amount
                                <input type="text" value={this.state.funding_goal} onChange={this.update('amount')} className="backing-input"/>
                            </label>
                        </div>
                        <br/>
                        <div className="grey-box">
                            <label>Message
                                <input type="textarea" value={this.state.funding_goal} onChange={this.update('message')} className="backing-input"/>
                            </label>
                        </div>
                        <br/>


                        <input type="submit" value={text} className="backing-submit"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default BackingForm;
