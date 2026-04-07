import ProtectedRoute from "../../../_components/ProtectedRoute"
import EmployeePage from "../../../_components/admin/EmployeesPage"

const Employees = () => {
    return (
        <ProtectedRoute component={EmployeePage} />
    )
}

export default Employees;