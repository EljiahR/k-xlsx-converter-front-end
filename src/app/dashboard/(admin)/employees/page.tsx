import ProtectedRoute from "src/app/_components/ProtectedRoute"
import EmployeePage from "src/app/_components/admin/EmployeesPage"

const Employees = () => {
    return (
        <ProtectedRoute component={EmployeePage} />
    )
}

export default Employees;