
import Navbar from "../components/pages/Navbar";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className='container-fluid'>
            <Navbar />
            <div className="pt-16">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;