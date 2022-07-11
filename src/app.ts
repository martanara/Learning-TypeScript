abstract class Department {
  // name : string;
  // private readonly id: number;
  protected employees: string[] = [];

  // static values can be accessed from outside the class but cannot be accessed within the class
  static fiscalYear = 2022;

  // 'private' keyword makes properties only accessible within the class department
  // So we cannot use: Department.employees.push('Anna);
  // JS only knows private / public in the latest versions
  // 'protected' makes a property available for classes that inherit after the parent

  // easier way for declaring properties using constructor 
  constructor (protected readonly id: number, public name: string) {
    // this.name = n;
  }

  // Static methods can be called outside of class instance
  static createEmployee(name: string) {
    return { name: name }
  }

  // abstract classes force children classes to create their own implementaion

  abstract describe(this: Department): void;

  // 'this' with type of class makes it easier to catch an error when we are calling the method outside of class instance
  // describe(this: Department) {
  //   console.log(`Department no: ${this.id}, name: ${this.name}`);
  // }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
};

class ITDepartment extends Department {
  constructor(id: number, public admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log(`IT department Id: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  // private constructor makes sure that the class is a 'singleton' (only one instance of it exists)
  private constructor(id: number, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    return this.instance = new AccountingDepartment(1, ['Something went wrong...']);
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.')
  };

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Pass in a valid value!')
    } 
    this.addReport(value);
  }

  describe() {
    console.log(`Accounting department Id: ${this.id}`);
  }

  //overriding parent class method
  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Marta');

console.log(employee1);
console.log(Department.fiscalYear)

const accounting = AccountingDepartment.getInstance();
console.log(accounting);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.describe();
accounting.printEmployeeInformation();

const it = new ITDepartment(2, ['Max']);
console.log(it);
it.describe();

accounting.mostRecentReport = 'Year End Report';
console.log(accounting.mostRecentReport);




// const accountingCopy = { describe: accounting.describe }
// accountingCopy.describe();