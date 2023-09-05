import { Employee } from '../employee.js';

export class Dev extends Employee {
  constructor(id, salary) {
    super(id, salary);
    this.jobType = 'Dev';
  }

  getJobType() {
    return `I am a ${this.jobType}`;
  }
}
