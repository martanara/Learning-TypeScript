class Department {
  // name : string;
  // proivate readonly id: number;
  private employees: string[] = [];

  // 'private' keyword makes properties only accessible within the class department
  // So we cannot use: Department.employees.push('Anna);
  // JS only knows private / public in the latest versions

  // easier way for declaring properties using constructor 
  constructor(private readonly id: number, public name: string) {
    // this.name = n;
  }

  // this with type of class makes it easier to catch an error when we are calling the method outside of class instance
  describe(this: Department) {
    console.log(`Department no: ${this.id}, name: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
};

const accounting = new Department(1, 'Accounting');
console.log(accounting);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { describe: accounting.describe }
// accountingCopy.describe();