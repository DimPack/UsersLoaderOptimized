import React from 'react';
import PropTypes from 'prop-types';

import Ciao, { userPropType } from '../Ciao';

function CiaoList({ users=[], userSelectedState=()=>{} }) {
  
  const userSelected = (id) => {
    const newUsers = users.map((user) => ({
      ...user,
      isSelected: user.id === id ? !user.isSelected : user.isSelected,
    }));
    userSelectedState(newUsers);
  };

  const mapUsers = (user) => (
    <Ciao key={user.id} user={user} userSelected={userSelected} />
  );

  return <section>{users.map(mapUsers)}</section>;
}

CiaoList.propTypes = {
  users: PropTypes.arrayOf(userPropType).isRequired,
  userSelectedState: PropTypes.func,
}

export default CiaoList;
