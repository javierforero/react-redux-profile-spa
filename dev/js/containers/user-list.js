import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectedUser} from '../actions/';

class UserList extends Component {
    createListItem() {
        return this.props.users.map((users) => {
           return(
             <li 
             key={users.id}
             onClick={() => this.props.selectedUser(users)}
             >{users.first}</li>
           )
        });
    }
    render() {
      return (
        <ul>
          {this.createListItem()}
        </ul>
      );
    }
}

function mapStateToProps(state) {
   return {
       users: state.users
   };
}

// this one is to bind the action to our redux

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectedUser: selectedUser}, dispatch);
  }

export default connect(mapStateToProps, matchDispatchToProps)(UserList);