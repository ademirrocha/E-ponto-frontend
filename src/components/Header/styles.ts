import Image from "next/image";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-image: linear-gradient(to top right, #274c43, #05e0e6);
    width: 100%;
    padding: 10px;
   
     & > .dv-1{
        margin-left: 130px;
        margin-top: -60px;
        font-size: 180%;
        color: #fff;
        font-weight: 500;
        font-family: "Montserrat", "Roboto", sans-serif;
     }  
     
     & > .dv-2{
        margin-left: 130px;
        margin-top: 5px;
        font-size: 80%;
        color: #fff;
        font-weight: 500;
        font-family: "Montserrat", "Roboto", sans-serif;
     } 
`



export const ImageContainer = styled(Image)`
    margin-left: -10px;
    margin-bottom: -13px;
    height: 70px;
    width: 120px;  
`