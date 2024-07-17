
import styled from "styled-components";
import { Drawer, IconButton, ListItemIcon } from "@mui/material";


export const SidebarContainer = styled(Drawer)<{ open: boolean }>`
    width: ${(props) => (props.open ? "240px" : "60px")};
    transition: width 0.3s;
    flex-shrink: 0;

    & .MuiDrawer-paper {
      width: ${(props) => (props.open ? "240px" : "60px")};
      transition: width 0.3s;
      overflow-x: hidden;
      background-image: linear-gradient(to top right, #5da5a142, #b8ccdc);
    }
`;

export const ToggleButton = styled(IconButton)<{ open: boolean }>`
  top: 0px;
  left: ${(props) => (props.open ? "120px" : "20px")};
  transition: left 0.3s;
  z-index: 9999;
`;

export const ContentContainer = styled.div<{ open: boolean }>`
  margin-left: ${(props) => (props.open ? "240px" : "60px")};
  transition: margin-left 0.3s;
`;

export const ContentChildren = styled.div`
  padding: 3px;
  min-height: calc(100vh - 149px);
`;

export const LineText = styled.div<{ open: boolean }>`
  width: ${(props) => (props.open ? "230px" : "60px")};
  margin-left: ${(props) => (props.open ? "10px" : "0px")};
  padding: ${(props) => (props.open ? "10px" : "0px")};
`;



export const ListIconOpen = styled(ListItemIcon)`
    display: flex;
    justify-content: flex-end;
`;

export const ListIconClose = styled(ListItemIcon)`
    display: flex;
    justify-content: flex-start;
`;