import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddDoctor from '../AddDoctor/AddDoctor';
import useAuth from './../../../hooks/useAuth';
import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import Payment from '../Payment/Payment';
import MakeDoctor from '../MakeDoctor/MakeDoctor';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Patients from '../../Pateints/Patients/Patients';
import MainDashboard from '../MainDashboard/MainDashboard';
import DoctorRoute from '../../Login/DoctorRoute/DoctorRoute';
import DoctorBlogs from '../DoctorBlogs/DoctorBlogs';
import AllBlogsManage from '../AllBlogsManage/AllBlogsManage';
import AllPatientsList from '../AllPatientsList/AllPatientsList';
import TotalIncome from '../TotalIncome/TotalIncome';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MedicationIcon from '@mui/icons-material/Medication';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const drawerWidth = 250;



function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin , doctor } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    

   
    const drawer = (
        <div style={{backgroundColor:'#5CE7ED' , height:'100%'}}>
            <Toolbar />
       
            
            {doctor && <Box>
                <div style={{display:'flex' , alignItems:'center' ,marginLeft:'30px'}}><LineStyleIcon style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to={`${url}`}><Button color="inherit">Dashboard</Button></Link></div>
            <div style={{display:'flex' , alignItems:'center' ,marginLeft:'30px'}}><CalendarTodayIcon style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}}  to={`${url}/appointments`}><Button color="inherit">Appointment</Button></Link></div>
            <div style={{display:'flex' , alignItems:'center' ,marginLeft:'30px'}}><PeopleAltIcon  style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to={`${url}/patients`}><Button color="inherit">Patients</Button></Link></div>
            <div style={{display:'flex' , alignItems:'center' ,marginLeft:'30px'}}><PeopleAltIcon  style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to={`${url}/writeBlogs`}><Button color="inherit">Write Blogs</Button></Link></div>
                
                
                </Box>}
            
            {admin && <Box>
                <div style={{display:'flex' , alignItems:'center' ,marginLeft:'30px'}}> <AdminPanelSettingsIcon  style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link> </div>
                <div style={{display:'flex' , alignItems:'center' ,marginLeft:'30px'}}> <MedicationIcon  style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to={`${url}/addDoctor`}><Button color="inherit">Doctor Management</Button></Link></div>
                <div style={{display:'flex' , alignItems:'center' ,marginLeft:'30px'}}> <AssignmentIcon  style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to={`${url}/blogsManage`}><Button color="inherit">Blogs Management</Button></Link></div>
                <div style={{display:'flex' , alignItems:'center' ,marginLeft:'30px'}}> <AssignmentIndIcon   style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to={`${url}/patientsManage`}><Button color="inherit">Patients Management</Button></Link></div>
                <div style={{display:'flex' , alignItems:'center' ,marginLeft:'30px'}}> <AccountBalanceIcon  style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to={`${url}/incomeManage`}><Button color="inherit">Income MAnagement </Button></Link></div>
                
            </Box>}
            
               
                    
                        
                            
                      
           
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor:'white',
                    border: 'none'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography sx={{color:'black'}} variant="h6" noWrap component="div">
                        Appointments
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <MainDashboard></MainDashboard>
                    </Route>
                    <Route exact path={`${path}/appointments`}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <DoctorRoute path={`${path}/patients`}>
                        <Patients></Patients>
                    </DoctorRoute>
                    <DoctorRoute path={`${path}/writeBlogs`}>
                        <DoctorBlogs></DoctorBlogs>
                    </DoctorRoute>
                    <Route path={`${path}/payment/:appointmentId`}>
                        <Payment></Payment>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                   
                    <AdminRoute path={`${path}/addDoctor`}>
                        <AddDoctor></AddDoctor>
                    </AdminRoute>
                    <AdminRoute path={`${path}/blogsManage`}>
                        <AllBlogsManage></AllBlogsManage>
                    </AdminRoute>
                    <AdminRoute path={`${path}/patientsManage`}>
                        <AllPatientsList></AllPatientsList>
                    </AdminRoute>
                    <AdminRoute path={`${path}/incomeManage`}>
                        <TotalIncome></TotalIncome>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;