function sortBySalary(array) {
  return array.sort((a, b) => {
    if (a.salary !== b.salary) {
      return a.salary - b.salary;
    } else {
      return a.id - b.id;
    }
  });
}

export default sortBySalary;
