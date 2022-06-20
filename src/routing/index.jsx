import { Routes, Route, useNavigate } from "react-router-dom";
// import { Suspense, lazy } from "react";
import { LoginPage } from 'pages/LoginPage';
import { Employees } from "./Employees";
import { Users } from "./Users";
import { MainPage } from "./MainPage";
import { DayOff } from "./DayOff";
import { Notifications } from "./Notifications"
import { Profile } from "pages/Profile/Profile"
import { UserRoles } from "./UserRoles";
import { BusinessTrip } from "./BusinessTrip";
import { Vacation } from "./Vacation";
import { ITSupply } from "./ITSupply";
import { Guest } from "./Guest";
import { Purchase } from "./Purchase";
// import { Loading } from "components/Loading";
import { LS } from 'utils';
import { appConfig } from "configs";
import { useEffect } from "react";
import MainLayout from "containers/mainLayout";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";

// const MainLayout = lazy(() => import('containers/mainLayout'));

export const Routing = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const login = LS.getItemLocalStorage(appConfig.userData)
        if (!login) {
            navigate("/login")
        }
    }, [navigate])

    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path="/" element={
                // <Suspense fallback={<Loading />}>
                <MainLayout />
                // </Suspense>
            }>
                {MainPage()}
                {Employees()}
                {DayOff()}
                {BusinessTrip()}
                {Vacation()}
                {Guest()}
                {ITSupply()}
                {Purchase()}
                {Users()}
                {Notifications()}
                {UserRoles()}
                <Route path="/profile/*" element={<Profile />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}       
