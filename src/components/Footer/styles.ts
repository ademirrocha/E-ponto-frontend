import Image from "next/image";
import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-image: linear-gradient(to bottom left, #274c43, #05e0e6);
    width: 100%;
   
     & > .dv{
         text-align: center;
        font-size: 80%;
        color: #fff;
        font-weight: 500;
        font-family: "Montserrat", "Roboto", sans-serif;
     } 
`



export const ImageContainer = styled(Image)`
   margin-left: calc(100% - 150px);
    margin-bottom: -40px;
    height: 50px;
    width: 170px; 
`