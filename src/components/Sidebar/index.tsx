'use client'
import "./../../app/globals.css";
import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, ListItemButton, Divider } from '@mui/material';
import { Home, Menu, Settings, ArrowBack } from '@mui/icons-material';
import * as S from './styles';
import { MenuModel } from '@/models/menu.model';
import Link from 'next/link';
import FooterComponent from '../Footer';
import HeaderComponent from '../Header';

const menus = [
  { label: 'Cartão Ponto', icon: <Home />, path: '/cartao-ponto' },
  { label: 'Configurações', icon: <Settings />, path: '/configuracoes' }
] as MenuModel[];

const Sidebar = ({ children }: any) => {
  const [open, setOpen] = useState(true);
  const [showToggleButton, setShowToggleButton] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 400) {
          setShowToggleButton(false);
          setOpen(false);
        } else if (window.innerWidth < 775) {
          setShowToggleButton(true);
          setOpen(false);
        } else {
          setShowToggleButton(true);
          setOpen(true);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize(); // Check the width initially
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const handleToggle = () => {
    if (typeof window !== 'undefined' && window.innerWidth >= 400) {
      setOpen((prevOpen) => !prevOpen);
    }
  };


  return (
    <div>
      <S.SidebarContainer variant="permanent" open={open}>
        <List>
          {showToggleButton && (
            <S.LineText open={open}>
          
              <ListItem disablePadding>
                
                {open && <>
                  <Link href={'/'} replace style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItemText primary="E-ponto" />
                  </Link>
                </>}

                <S.ToggleButton onClick={handleToggle} open={open}>
                  {open ? <ArrowBack /> : <Menu />}
                </S.ToggleButton>
              </ListItem>

              <Divider />
            </S.LineText>
          )}
          {menus.map((menu: MenuModel, index: number) => (
            <Link replace href={menu.path} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem disablePadding component="div">
                <ListItemButton>
                    {open && <ListItemText primary={menu.label} />}

                    {open ? 
                        <S.ListIconOpen>{menu.icon}</S.ListIconOpen> 
                            : <S.ListIconClose>{menu.icon}</S.ListIconClose>
                    }

                    
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </S.SidebarContainer>

        <S.ContentContainer open={open}>
            <HeaderComponent />
            <S.ContentChildren>
                {children}
            </S.ContentChildren>
            <FooterComponent />
        </S.ContentContainer>
      
    </div>
  );
};

export default Sidebar;
