import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../redux/newstore';

class DataComponent extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        {this.props.data.map((d) => (
          <div key={d.id}>{d.name}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(DataComponent);
