import React, { Component } from 'react';
import CiaoList from './CiaoList';
import SortedGroupCiaoList from './SortedGroupCiaoList';
import SelectedCiaoList from './SelectedCiaoList';

const USERS_FROM_DB = [
  {
    id: 6,
    name: 'Fred',
    age: 45,
    isMale: true,
  },
  {
    id: 2,
    name: 'Bred',
    age: 51,
    isMale: true,
  },
  {
    id: 23,
    name: 'Anna',
    age: 24,
    isMale: false,
  },
];

class CiaoBlockParent extends Component {
  constructor() {
    super();
    this.state = {
      users: USERS_FROM_DB.map((user) => ({
        ...user,
        isSelected: false,
      })),
      isUpSortAge: true,
      isUpSortName: true,
    };
  }

  sortUsersByName = (newUsers) => {
    const { isUpSortName } = this.state;
    this.setState({
      users: newUsers,
      isUpSortName: !isUpSortName,
    });
  };

  sortUsersByAge = (newUsers) => {
    const { isUpSortAge } = this.state;
    this.setState({
      users: newUsers,
      isUpSortAge: !isUpSortAge,
    });
  };

  userSelectedState = (newUsers) => {
    this.setState({
      users: newUsers,
    });
  };

  render() {
    const { users, isUpSortAge, isUpSortName } = this.state;
    return (
      <>
        <SortedGroupCiaoList
          isUpSortAge={isUpSortAge}
          isUpSortName={isUpSortName}
          sortUsersByName={this.sortUsersByName}
          sortUsersByAge={this.sortUsersByAge}
          users={users}
        />
        <CiaoList users={users} userSelectedState={this.userSelectedState} />
        <hr />
        <SelectedCiaoList users={users} />
      </>
    );
  }
}

export default CiaoBlockParent;
