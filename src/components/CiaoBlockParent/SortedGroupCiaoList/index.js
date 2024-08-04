import React from 'react';

function SortedGroupCiaoList({
  isUpSortAge,
  isUpSortName,
  sortUsersByName,
  sortUsersByAge,
  users,
}) {
  const getNewUsersByName = () => {
    const newUsers = users.toSorted((userA, userB) => {
      const nameA = userA.name.toUpperCase();
      const nameB = userB.name.toUpperCase();
      if (nameA < nameB) {
        return isUpSortName ? -1 : 1;
      }
      if (nameA > nameB) {
        return isUpSortName ? 1 : -1;
      }
      return 0;
    });
    sortUsersByName(newUsers);
  };
  const getNewUsersByAge = ()=>{
    const newUsers = users.toSorted((userA, userB) =>
      isUpSortAge ? userA.age - userB.age : userB.age - userA.age
    )
    sortUsersByAge(newUsers);
  }
  return (
    <div>
      <button onClick={getNewUsersByName}>
        sort {isUpSortName ? 'Up' : 'Down'} by name
      </button>
      <button onClick={getNewUsersByAge}>
        sort {isUpSortAge ? 'Up' : 'Down'} by age
      </button>
    </div>
  );
}

export default SortedGroupCiaoList;
