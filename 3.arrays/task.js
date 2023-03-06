function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index])) {
    return true;
  } else {
  	  return false;
    }
}

function getUsersNamesInAgeRange(users, gender) {
  let arr = [...users];
  let result = arr.filter(user => user.gender === gender).reduce((accum, user, index, arr) => {
      accum += user.age;
      if (index === arr.length - 1) {
        return accum / arr.length;
      }
      return accum;
  }, 0);
  
  return result;
}