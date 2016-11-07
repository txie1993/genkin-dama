import React from 'react';
import {Link} from 'react-router';

class BackingShow extends React.Component {
    componentDidMount() {
        this.props.fetchBacking(this.props.params.backingId);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value)
            this.props.fetchBacking(nextProps.params.backingId);
        }

    render() {
        const backing = this.props.backing;
        if (!backing) {
            return <div>Loading...</div>;
        }

        return (
            <div className="backing-show-container">
                <div className="backing-show-box">
                    <div className="backing-title">
                        <h2>{backing.title}</h2>
                        <p>by {backing.creator.username}</p>
                    </div>
                    <div className="backing-body">
                        <div className="backing-row">
                            <div className="backing-left" style={{backgroundImage: `url(${backing.image_url})`}}>
                            </div>
                            <div className="backing-right">
                                <div className="backing-right-backers">
                                    <h1>{backing.num_backers}</h1>
                                    <p>backers</p>
                                </div>
                                <div className="backing-right-goal">
                                    <h1>${backing.collected_funds}</h1>
                                    <p>pledged of ${backing.funding_goal}</p>
                                </div>
                                <div className="backing-right-time">
                                    <h1>{backing.remaining_days}</h1>
                                    <p>days to go</p>
                                </div>
                            </div>
                        </div>
                        <div className="backing-row-2">
                            <div className="backing-left-2">
                              <p>{backing.description}</p>
                            </div>
                            <div className="backing-right-2">
                              <button>Back this Backing</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BackingShow;
