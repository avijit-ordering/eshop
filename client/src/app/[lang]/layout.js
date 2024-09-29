"use client";
  import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "../responsive.css";
import React, { useEffect, useState } from "react";

import ThemeProvider from "@/context/ThemeProvider";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer/index";
import { i18n } from '../../../i18n'
import { getDictionary } from "../../../getDictionary"


export default function RootLayout({ children, params }) {
  const [lang, setlang] = useState({});
  useEffect(() => {
    const fetchData = async () => {
    const lang_set = await getDictionary(params.lang);
    setlang(lang_set)
     
 
    }
    fetchData();

  },[])
  
  return (
    <html lang={params.lang}>
      <body>
         <ThemeProvider>
          <Header params={params} t={lang}/> 
          {children}
           <Footer />
        </ThemeProvider> 
      </body>
    </html>
  );
}
