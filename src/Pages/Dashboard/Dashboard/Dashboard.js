import React from 'react';
import AddDoctor from '../AddDoctor/AddDoctor';
import Appointments from '../Appointments/Appointments';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <AddDoctor></AddDoctor>
            <DashboardHome></DashboardHome>
            <MakeAdmin></MakeAdmin>
        </div>
    );
};

export default Dashboard;