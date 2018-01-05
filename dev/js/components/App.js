import React from 'react';
import UserList from '../containers/user-list';
require('../../scss/style.scss');

const App = () => {
   return (
      <div>
        <h2>Username List: </h2>
        <UserList />
      </div>
      );
};

export default App;