import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import MoreIcon from '@mui/icons-material/MoreVert';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import LoginIcon from '@mui/icons-material/Login';
import Avatar from '@mui/material/Avatar';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useDoctors from '../../../hooks/useDoctors';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  
const Navigation = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
 const {user , logout , dashboardUse , navUse , notifications, unreadCount} = useAuth();
 const {doctors} = useDoctors()
 
  const [isDoctor , setIsDoctor] = React.useState(false)
  const [image , setImage] = React.useState('')
  const [doctorName , setDoctorName] = React.useState('')
 
 React.useEffect(() => {
  
  const imageGet = doctors?.find(d=> d.email == user.email)
  setImage(imageGet?.image)
  setDoctorName(imageGet?.name)
 
  if(imageGet){
    setIsDoctor(true)
  }
  else{
    setIsDoctor(false)
  }

}, [user.email , doctors])


console.log(navUse)

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>{isDoctor? `Dr . ${user.displayName}`:  `${user.displayName}`}</MenuItem>
     
{isDoctor?'':<div> {notifications? <Badge badgeContent={unreadCount} color="secondary"><Link to= "/myPrescriptions" style={{color:'red', textDecoration:'none'}}><MenuItem onClick={handleMenuClose}>My Prescription</MenuItem></Link></Badge>:<Link to= "/myPrescriptions" style={{color:'blue' , textDecoration:'none'}}><MenuItem onClick={handleMenuClose}>My Prescription</MenuItem></Link>  }</div>}
 
      <MenuItem onClick={logout}>Log Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    {navUse &&  <Link to='/dashboard' style={{textDecoration:'none'}}>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          
            <DashboardCustomizeRoundedIcon />
          
        </IconButton>
        <p>Dashboard</p>
      </MenuItem>
    </Link>}
    
     <Link to='/appointment' style={{textDecoration:'none'}}> <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          
            <MedicalServicesIcon />
          
        </IconButton>
        <p>Dental Services</p>
      </MenuItem></Link>
    <Link to='/blogs'>
    <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          
            <ChromeReaderModeIcon />
          
        </IconButton>
        <p>Blogs</p>
      </MenuItem>
    </Link>
    <Link to='/booked' style={{textDecoration:'none'}}>
    <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          
            <AddTaskIcon />
          
        </IconButton>
        <p>Booked Info</p>
      </MenuItem>
    </Link>
   
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {isDoctor? <Avatar alt="doctors" src={`data:image/png;base64,${image}`}/>:<div>{user?.photoURL?<Avatar alt="doctors" src={user.photoURL} />:<AccountCircle/>}</div>}
          
        </IconButton>
       {isDoctor? <p>Dr .{user.displayName}</p>:  <p>{user.displayName}</p>}
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: '#5CE7ED'}}>
        <Toolbar>
       
         <Link to='/' style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}}>
         <Typography
            variant="h6"
            noWrap
            component="div"
           
          >
            Doctor Portal
          </Typography>
         </Link>
       
          <Box sx={{ flexGrow: 2 }} />

      
        {user?.email? <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        {navUse && <div  style={{marginTop:'20px', marginRight:'15px'}} >
          <Tooltip title="Dashboard" arrow>
         <Link  to='/dashboard' style={{ textDecoration: 'none' , color:"inherit"}}>
        
            
                Dashboard
               
          
         </Link>
            </Tooltip>
            </div>}
            
        <div style={{marginTop:'20px', marginRight:'15px'}}>
          <Tooltip title="Dental Services" arrow>
         <Link to='/appointment' style={{ textDecoration: 'none' , color:"inherit"}}>
        
            
                Services
               
            
         </Link>
            </Tooltip>
            </div>
            <div style={{marginTop:'20px', marginRight:'15px'}}>
          <Tooltip title="blogs" arrow>
         <Link to='/blogs' style={{ textDecoration: 'none' , color:"inherit"}}>
        
            
                Blogs
               
            
         </Link>
            </Tooltip>
            </div>
            <div style={{marginTop:'20px', marginRight:'15px'}}>
          <Tooltip title="booked information" arrow>
         <Link to='/booked' style={{ textDecoration: 'none' , color:"inherit"}}>
        
            
                Booked Info
               
            
         </Link>
            </Tooltip>
            </div>
           
           
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {isDoctor? <Avatar alt="doctors" src={`data:image/png;base64,${image}`}/>:<div>{user?.photoURL?<Avatar alt="asd" src={user.photoURL} />:<AccountCircle/>}</div>}
              
            </IconButton>
          </Box>: <Link style={{color:'white' , textDecoration:'none'}} to='/login'>  <LoginIcon></LoginIcon></Link>
        }
         {user?.email? <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>:''}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Navigation;