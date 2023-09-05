import { Employee } from '../employee.js';

export class PM extends Employee {
  constructor(id, salary) {
    super(id, salary);
    this.jobType = 'PM';
  }

  getJobType() {
    return `I am a ${this.jobType}`;
  }
}
