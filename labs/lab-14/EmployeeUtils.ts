import Employee from "./Employee";
import ContractEmployee from "./ContractEmployee";
import FullTimeEmployee from "./FullTimeEmployee";

export function calculateTotalSalary(employees: Employee[]): number {
    let totalSalary = 0;
    for (let employee of employees) {
        totalSalary += employee.getSalary();
    }
    return totalSalary;
}

export function findHighestAndLowestSalary(employees: Employee[]): {highestSalary: Employee, lowestSalary: Employee} {
    let highestSalary = employees[0];
    let lowestSalary = employees[0];
    
    for (let employee of employees) {
        if (employee.getSalary() > highestSalary.getSalary()) {
            highestSalary = employee;
        }
        if (employee.getSalary() < lowestSalary.getSalary()) {
            lowestSalary = employee;
        }
    }
    
    return { highestSalary, lowestSalary };
}

export function sortEmployeesBySalary(employees: Employee[]): Employee[] {
    return employees.sort((a, b) => b.getSalary() - a.getSalary());
}

export function sortEmployeesByName(employees: Employee[]): Employee[] {
    return employees.sort((a, b) => a.getName().localeCompare(b.getName()));
}

