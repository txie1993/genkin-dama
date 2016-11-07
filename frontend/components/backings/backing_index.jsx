import React from 'react';
import BackingIndexItem from './backing_index_item';
import BackingForm from './backing_form';

class BackingIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBackings();
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
            this.props.backings.map(backing => (
              <BackingIndexItem
                key={backing.id}
                deleteBacking={this.props.deleteBacking}
                backing={backing} />
            ))
          }
        </ul>
      </div>
      </div>
    );
  }
}

export default BackingIndex;
