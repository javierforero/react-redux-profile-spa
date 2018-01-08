import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetails extends Component {

    render() {
        if(!this.props.user) {
          return (
              <h4>Select User..</h4>
          );
        }
        return (
            <div>{this.props.user.first}, {this.props.user.last}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser 
    };
}

export default connect(mapStateToProps)(UserDetails);