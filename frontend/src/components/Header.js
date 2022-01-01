import React from 'react';

export const Header = props => {

    const nameLogin = localStorage.getItem('usernameLogin');
    
    return (
        <div className="container-header">
            <h3>Dashboard</h3>
            <span>Olá,{nameLogin}</span>
            
        </div>
    );
}