import Employee from "./Employee";
import ContractEmployee from "./ContractEmployee";
import FullTimeEmployee from "./FullTimeEmployee";
import {calculateTotalSalary, findHighestAndLowestSalary, sortEmployeesBySalary, sortEmployeesByName} from "./EmployeeUtils";

const employees: Employee[] = [
    new FullTimeEmployee("FTE1"),
    new FullTimeEmployee("FTE2"),
    new FullTimeEmployee("FTE3"),
    new ContractEmployee("Contractor1"),
    new ContractEmployee("Contractor2")
];

// Calculate total salary
console.log(`Total  salary: ${calculateTotalSalary(employees)}`);

// Find highest and lowest salary
const { highestSalary, lowestSalary } = findHighestAndLowestSalary(employees);
console.log(`Highest Salary: ${highestSalary.getName()} : ${highestSalary.getSalary()}`);
console.log(`Lowest Salary: ${lowestSalary.getName()} : ${lowestSalary.getSalary()}`);

// Sort employees by salary
console.log("\nSorted by Salary:");
console.log(sortEmployeesBySalary(employees).map(emp => `${emp.getName()} : ${emp.getSalary()}`));

// Sort employees by name
console.log("\nSorted by Name:");
console.log(sortEmployeesByName(employees).map(emp => `${emp.getName()} : ${emp.getSalary()}`));