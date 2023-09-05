export class Employee {
  constructor(id, salary) {
    this.id = id;
    this.salary = salary;
  }

  static compareSalary(firstEmployee, secondEmployee) {
    if (firstEmployee.salary > secondEmployee.salary) {
      return `User with id ${firstEmployee.id} has greater salary`;
    } else if (firstEmployee.salary < secondEmployee.salary) {
      return `User with id ${secondEmployee.id} has greater salary`;
    } else {
      return 'salaries are equal';
    }
  }
}
