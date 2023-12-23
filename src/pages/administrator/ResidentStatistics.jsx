import { useNavigate } from "react-router-dom";
import AdministratorHeader from "../../components/AdministratorHeader";
import SidebarAdministrator from "../../components/SidebarAdministrator";
function ResidentStatistics() {
    const navigate = useNavigate()
    return (
        <div className="h-Screen">
            <AdministratorHeader />
            <div className="flex">
                <SidebarAdministrator />
            </div>
        </div>
    );
}
export default ResidentStatistics;