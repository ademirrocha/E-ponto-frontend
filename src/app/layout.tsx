"use client";

import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <StyledComponentsRegistry>
        <body className={`${roboto.className} ${montserrat.className}`}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {children}
          </LocalizationProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
