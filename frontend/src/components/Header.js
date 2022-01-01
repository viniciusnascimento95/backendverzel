import React from 'react';
import { Button } from 'react-bootstrap';

export const Header = props => {

    const nameLogin = localStorage.getItem('usernameLogin');

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('usernameLogin');         
        window.location.reload(false);
        props.setAccessToken('');  
    };
    
    return (
        <div className="container-header">
            <h3>Dashboard</h3>
            <span>Olá,{nameLogin}</span>
            <Button variant="danger" onClick={logout}>Sair</Button>            
        </div>
    );
}