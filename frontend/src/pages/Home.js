import React from "react";
import { Header } from '../components/Header';

import Dashboard from '../components/Dashboard';

export const Home = props => { 

    return (
        <>        
          <Header />            
          <Dashboard />
        </>
    );
}