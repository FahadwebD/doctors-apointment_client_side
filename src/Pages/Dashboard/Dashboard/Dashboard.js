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

import LineStyleIcon from '@mui/icons-material/LineStyle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

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
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DoctorBlogsManagement from '../DoctorBlogsManagement/DoctorBlogsManagement';
import ServicesManagement from '../ServicesManagement/ServicesManagement';
import BillManage from '../BillManage/BillManage';
import DoctorOldPatients from '../DoctorOldPatients/DoctorOldPatients';
const drawerWidth = 250;



function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { user , logout , dashboardUse} = useAuth();
    const [admin, setAdmin] = React.useState(false);
    const [doctor, setDoctor] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    
    React.useEffect(() => {
        fetch(`https://floating-cliffs-15059.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                if(data.hisRole === 'admin'){
                    setAdmin(true)
                    
                }
                else if(data.hisRole === 'doctor'){
                    setDoctor(true)
                    
                }
            })
    }, [user.email])
    console.log(dashboardUse)
   
    const drawer = (
        <div style={{backgroundColor:'#5CE7ED' , height:'100%'}}>
            <Toolbar />
            <div style={{display:'flex' , alignItems:'center' ,position: 'absolute',
                top: '0px',left:'10px'}}><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to='/'><h1>Doctor Portal</h1></Link></div>
            

            <div style={{display:'flex' , alignItems:'center' ,marginLeft:'10px' , marginTop:'30px'}}> <HomeIcon style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to='/'><Button color="inherit">Home </Button></Link></div>
          
            
           
            
            {dashboardUse ? <Box>
                <div style={{display:'flex' , alignItems:'center' ,marginLeft:'10px'}}><LineStyleIcon style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to={`${url}`}><Button color="inherit">Dashboard</Button></Link></div>
                <div style={{display:'flex' , alignItems:'center' ,marginLeft:'10px'}}><CalendarTodayIcon style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}}  to={`${url}/appointments`}><Button color="inherit">Appointments Manage</Button></Link></div>
                <div style={{display:'flex' , alignItems:'center' ,marginLeft:'10px'}}> <AdminPanelSettingsIcon  style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to={`${url}/makeAdmin`}><Button color="inherit">Admin Management</Button></Link> </div>
                <div style={{display:'flex' , alignItems:'center' ,marginLeft:'10px'}}> <MedicationIcon  style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to={`${url}/addDoctor`}><Button color="inherit">Doctor Management</Button></Link></div>
                <div style={{display:'flex' , alignItems:'center' ,marginLeft:'10px'}}> <AssignmentIcon  style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to={`${url}/blogsManage`}><Button color="inherit">Blogs Management</Button></Link></div>
                <div style={{display:'flex' , alignItems:'center' ,marginLeft:'10px'}}> <AssignmentIndIcon   style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to={`${url}/patientsManage`}><Button color="inherit">Patients Management</Button></Link></div>
                <div style={{display:'flex' , alignItems:'center' ,marginLeft:'10px'}}> <HealthAndSafetyIcon  style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to={`${url}/servicesManage`}><Button color="inherit">Services MAnagement </Button></Link></div>
                <div style={{display:'flex' , alignItems:'center' ,marginLeft:'10px'}}> <AccountBalanceWalletIcon style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to={`${url}/billManage`}><Button color="inherit">Bill MAnagement </Button></Link></div>
                
                <div style={{display:'flex' , alignItems:'center' ,marginLeft:'10px'}}> <AccountBalanceIcon  style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to={`${url}/incomeManage`}><Button color="inherit">Income MAnagement </Button></Link></div>
                
            </Box>: <Box>
               
            
            <div style={{display:'flex' , alignItems:'center' ,marginLeft:'10px'}}><PersonSearchIcon  style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to={`${url}/patients`}><Button color="inherit">My Patients</Button></Link></div>
            <div style={{display:'flex' , alignItems:'center' ,marginLeft:'10px'}}><HistoryEduIcon style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to={`${url}/writeBlogs`}><Button color="inherit">Write Blogs</Button></Link></div>
            <div style={{display:'flex' , alignItems:'center' ,marginLeft:'10px'}}><NoteAltIcon style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to={`${url}/myBlogs`}><Button color="inherit">Blogs Management</Button></Link></div>
            <div style={{display:'flex' , alignItems:'center' ,marginLeft:'10px'}}><PersonSearchIcon  style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to={`${url}/oldPatients`}><Button color="inherit">Old Patients</Button></Link></div>
                
                
                </Box>}
            
        <div style={{display:'flex' , alignItems:'center' ,position: 'absolute',
                bottom: '10px',left:'10px'}}> <LogoutIcon  style={{color:'white' , fontWeight:'bolder'}}/><Button color="inherit" style={{color:'white'}} onClick={logout} >Log Out</Button></div>
               
                    
                
                        
                    
                    
                            
                      
           
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
                        Dashboard
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
                    <DoctorRoute path={`${path}/oldPatients`}>
                        <DoctorOldPatients></DoctorOldPatients>
                    </DoctorRoute>
                    <DoctorRoute path={`${path}/myBlogs`}>
                        <DoctorBlogsManagement></DoctorBlogsManagement>
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
                    <AdminRoute path={`${path}/servicesManage`}>
                        <ServicesManagement></ServicesManagement>
                    </AdminRoute>
                    <AdminRoute path={`${path}/billManage`}>
                        <BillManage></BillManage>
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