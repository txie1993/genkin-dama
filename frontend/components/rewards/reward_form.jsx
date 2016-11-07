import React from 'react';

class RewardForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.uploadStatusMessage = this.uploadStatusMessage.bind(this);

        // use reward in store if updating; start with blank reward if new
        this.state = this.props.reward || {
            title: "",
            image_url: "",
            description: "",
            funding_goal: "",
            creator_id: "",
            end_date: ""
        };
    }

    uploadStatusMessage() {
      if (this.state.image_url === "") return "Click Here to Select File";
      else if (this.state.image_url === "loading") return "Uploading...";
      else return "Upload Complete!";
    }

    imgurUpload() {
        return e => {
          this.setState({["image_url"]: "loading"});
            let data = new FormData();
            let image = e.target.files[0];
            data.append("image", image);
            $.ajax({
                method: "POST",
                url: "https://api.imgur.com/3/image",
                data: data,
                datatype: "json",
                headers: {
                    "Authorization": "Client-ID b33667a5f51552a"
                },
                success: (response) => {
                  console.log(response);
                    this.setState({["image_url"]: response.data.link});
                    this.uploadStatus = true;
                },
                cache: false,
                contentType: false,
                processData: false
            });
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
            title: "",
            image_url: "",
            description: "",
            funding_goal: "",
            creator_id: "",
            end_date: ""
        });
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e) {
        console.log(this.props.formType);
        e.preventDefault();
        this.props.formType === 'new'
            ? this.props.createReward(this.state)
            : this.props.updateReward(this.state);
        this.props.router.push("/");
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
                            <label>Title
                                <input type="text" value={this.state.title} onChange={this.update('title')} className="reward-input"/>

                            </label>
                            <p>Your reward title and blurb should be simple, specific, and memorable. Our search tools run through these sections of your reward, so be sure to incorporate any key words here! These words will help people find your reward, so choose them wisely! Your name will be searchable too.</p>
                        </div>
                        <br/>
                        <div className="grey-box">
                            <label>
                                Short Blurb
                                <textarea value={this.state.description} onChange={this.update('description')} className="reward-text-input"/>
                                <p>If you had to describe what you're creating in one tweet, how would you do it?</p>
                            </label>
                        </div>
                        <br/>

                        <div className="grey-box">
                        <div className="upload-container">
                                <h4>Upload Image</h4>
                                <input type="file" title="Click here to upload!" onChange={this.imgurUpload()} className="reward-upload"/>
                                <h4 className="upload-overlay">{this.uploadStatusMessage()}</h4>
                        </div>
                        </div>
                        <br/>

                        <div className="grey-box">
                            <label>Funding Goal
                                <input type="text" value={this.state.funding_goal} onChange={this.update('funding_goal')} className="reward-input"/>

                            </label>
                        </div>
                        <br/>

                        <div className="grey-box">
                            <label>End Date
                                <input type="date" value={this.state.end_date} onChange={this.update('end_date')} className="reward-input"/>
                                <p>Select a reward end date. Leaving this blank will create a reward with no end date. You may want to use this if you wish to continually work on your reward as it receives funds over time.</p>
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
