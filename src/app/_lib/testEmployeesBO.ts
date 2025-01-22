var i = 0;

class EmployeeBO {
    bathroomOrder: Number = 0;
    birthday: string = new Date().toDateString();
    division: Number = 0;
    edit: Boolean = false;
    employeeId: Number = i++;
    firstName: string;
    getsLunchAsAdult: Boolean = false;
    isACallUp: Boolean = false;
    lastName: string;
    positionOverride: string | null = null;
    preferredFirstName: string | null = null
    preferredNumberOfBreaks: Number = 2;
    storeNumber: Number = 0;

    constructor(first: string, last: string) {
        this.firstName = first;
        this.lastName = last;
    }
}

const guy = new EmployeeBO("Tim", "Guy");
const guy2 = new EmployeeBO("Tam", "Giy");
const testEmployees : EmployeeBO[] = [guy, guy2];

export default testEmployees;