"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Instagram, WhatsApp } from '@mui/icons-material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logoLK from '../../../public/logolk.png'
import Image from 'next/image';
import { useRouter } from 'next/navigation';



const drawerWidth = 240;
const navItems = ['Quem Somos', 'Loja', 'Contato'];

export default function DrawerAppBar() {
  
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter()
  function btnClick(btText:string){
    switch(btText){
      case 'Quem Somos':
        return router.push('quem-somos')
        break;
      case 'Loja':
        return window.open('https://lingeriesdaka.com.br/', '_blank')
        break;
      default:
        const element = document.getElementById(btText);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          alert(`Nenhuma rota, link ou id encontrado para "${btText}"`);
        }
    }
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  

  if(typeof window !== 'undefined'){
  const container = window !== undefined ? () => window.document.body : undefined;
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography className='flex justify-center' variant="h6" sx={{ my: 2}}>
        <Image className='cursor-pointer' onClick={()=>{router.push('/')}} unoptimized src={logoLK} width={60} height={60} alt=''/>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color:'#403d39' }}>
              <ListItemText primary={item} onClick={()=>{btnClick(item)}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  // Desktop
 return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" className='p-0'>
        <Toolbar className='bg-white menu_bar' >
          <Image onClick={()=>{router.push('/')}} className='cursor-pointer lg:relative fixed right-2' unoptimized src={logoLK} width={60} height={60} alt='logo Lingeries da Ka'/>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color:'#403d39' }}
            
          >
            <MenuIcon  />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#403d39', marginX:1 }} onClick={()=>{btnClick(item)}}>
                {item}
              </Button>
            ))}
            <Button className='button_social h-full' sx={{ color: '#ffff', backgroundColor:'#403d39', height:'64px', borderRadius:0, marginRight:'2px' }} href='https://www.instagram.com/lingeries.da.ka' target='_blank'>
                <Instagram/>
            </Button>
            <Button sx={{ color: '#ffff', backgroundColor:'#403d39', height:'64px', borderRadius:0 }} href='https://api.whatsapp.com/send/?phone=5531995084186' target='_blank'>
                <WhatsApp/>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
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
      </nav>
    </Box>
  );
}
  
 
}