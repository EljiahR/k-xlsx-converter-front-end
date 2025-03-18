import { IEmployeeBO, IWeekdayBO } from "../types/shiftTypes";

const findPerson = (shifts: IWeekdayBO[], day: number, employee: IEmployeeBO, jobPosition: string): IEmployeeBO | null => {
    const job = shifts[day]?.jobPositions.find(j => j.name == jobPosition);
    if (!job) return;

    return employee.employeeId != "" && employee.employeeId != null && employee.employeeId != "0" ?
        job.shifts.find(s => s.employeeId == employee.employeeId) :
        job.shifts.find(s => s.name.firstName == employee.name.firstName && s.name.lastName == employee.name.lastName);
    
} 
export { findPerson };