import React from 'react';

class BackingForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.uploadStatusMessage = this.uploadStatusMessage.bind(this);

        // use backing in store if updating; start with blank backing if new
        this.state = this.props.backing || {
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
            this.props.fetchBacking(this.props.params.backingId);
        }
        if (!this.props.loggedIn) {
            this.props.router.push("/login");
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState(newProps.backing || {
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
            ? this.props.createBacking(this.state)
            : this.props.updateBacking(this.state);
        this.props.router.push("/");
    }

    render() {
        const text = this.props.formType === 'new'
            ? "Create Backing"
            : "Update Backing";
        return (
            <div className="backing-form-background fade-in">
                <div className="backing-form-container">
                    <h3>{text}</h3>

                    <form onSubmit={this.handleSubmit} className="backing-form-box">
                        <div className="grey-box">
                            <label>Title
                                <input type="text" value={this.state.title} onChange={this.update('title')} className="backing-input"/>

                            </label>
                            <p>Your backing title and blurb should be simple, specific, and memorable. Our search tools run through these sections of your backing, so be sure to incorporate any key words here! These words will help people find your backing, so choose them wisely! Your name will be searchable too.</p>
                        </div>
                        <br/>
                        <div className="grey-box">
                            <label>
                                Short Blurb
                                <textarea value={this.state.description} onChange={this.update('description')} className="backing-text-input"/>
                                <p>If you had to describe what you're creating in one tweet, how would you do it?</p>
                            </label>
                        </div>
                        <br/>

                        <div className="grey-box">
                        <div className="upload-container">
                                <h4>Upload Image</h4>
                                <input type="file" title="Click here to upload!" onChange={this.imgurUpload()} className="backing-upload"/>
                                <h4 className="upload-overlay">{this.uploadStatusMessage()}</h4>
                        </div>
                        </div>
                        <br/>

                        <div className="grey-box">
                            <label>Funding Goal
                                <input type="text" value={this.state.funding_goal} onChange={this.update('funding_goal')} className="backing-input"/>

                            </label>
                        </div>
                        <br/>

                        <div className="grey-box">
                            <label>End Date
                                <input type="date" value={this.state.end_date} onChange={this.update('end_date')} className="backing-input"/>
                                <p>Select a backing end date. Leaving this blank will create a backing with no end date. You may want to use this if you wish to continually work on your backing as it receives funds over time.</p>
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
