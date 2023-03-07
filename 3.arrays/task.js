function compareArrays(arr1, arr2) {
  return (arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index])) ? true : false;
}

function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter(user => user.gender === gender).reduce((accum, user, index, arr) => {
      accum += user.age;
      if (index === arr.length - 1) {
        return accum / arr.length;
      }
      return accum;
  }, 0);
  
  return result;
}