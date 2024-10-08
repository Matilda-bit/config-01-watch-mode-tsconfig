// const button = document.querySelector('button')!;

// button.addEventListener('click', () => {
//     console.log('Clicked!');
// });

abstract class Department {

    static fiscalYear = 2024;
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];
  
    constructor(protected readonly id: string, public name: string) {
      // this.id = id;
      // this.name = n;
    }

    static createEmployee(name: string) {
        return {name: name};
    }
    //hatima shel func - the same as in JAVA < __ <
    abstract describe(this: Department): void;
  
    addEmployee(employee: string) {
      // validation etc
      // this.id = 'd2';
      this.employees.push(employee);
    }
  
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }
  
  class ITDepartment extends Department {

    admins: string[];
    constructor(id: string, admins: string[]) {
      super(id, 'IT');
      this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
  }
  
  class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;
  
    get mostRecentReport() {
      if (this.lastReport) {
        return this.lastReport;
      }
      throw new Error('No report found.');
    }
  
    set mostRecentReport(value: string) {
      if (!value) {
        throw new Error('Please pass in a valid value!');
      }
      this.addReport(value);
    }
  
    private constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');
      this.lastReport = reports[0];
    }

    static getInstance() {
        if(AccountingDepartment.instance) {
            return this.instance;
        } else {
            this.instance = new AccountingDepartment('d2', []);
            return this.instance;
        }
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }
  
    addEmployee(name: string) {
      if (name === 'Polina') {
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

  const employee1 = Department.createEmployee('Polina');
  console.log(employee1, Department.fiscalYear);
  
  const it = new ITDepartment('d1', ['Polina']);
  
  it.addEmployee('Polina');
  it.addEmployee('German');
  
  // it.employees[2] = 'Anna';
  
  it.describe();
  it.name = 'NEW NAME';
  it.printEmployeeInformation();
  
  console.log(it);
  
  //   const accounting = new AccountingDepartment('d2', []);
  const accounting = AccountingDepartment.getInstance();
  const accounting2 = AccountingDepartment.getInstance();

  console.log(accounting, accounting2);
  
  accounting.mostRecentReport = 'Year End Report';
  accounting.addReport('Something went wrong...');
  console.log(accounting.mostRecentReport);
  
  accounting.addEmployee('Polina');
  accounting.addEmployee('German');
  
//   accounting.printReports();
//   accounting.printEmployeeInformation();
  accounting.describe();
  
  // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
  
  // accountingCopy.describe();
  