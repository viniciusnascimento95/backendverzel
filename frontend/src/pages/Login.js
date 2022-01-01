import React, { useState } from 'react';
import { Input } from '../components/Input'
import { execRequest } from '../services/api';

export const Login = props => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msgErro, setMsgErro] = useState('');
    const [isLoading, setLoading] = useState(false); 
    
    const sendLogin = async evento => {
        try {
            evento.preventDefault();
            setLoading(true);
            setMsgErro('');

            const body = {
                username,
                password
            };

            const responseApi = await execRequest('token', 'post', body)
            if(responseApi?.data?.access){
                localStorage.setItem('accessToken', responseApi.data.access);
                localStorage.setItem('usernameLogin', responseApi.data.username);
                props.setAccessToken(responseApi.data.access);
            }
            // console.log(responseApi);
        } catch (e) {
            if(e?.response?.data?.detail){
                setMsgErro(e.response.data.detail);
            }
            console.log(e);
        }
        setLoading(false);
    }

    return (
        <div className="container-login">
            <h2>Login</h2>
            <form>
                {msgErro && <p>{msgErro}</p>}
                <Input
                    inputType="text"
                    inputName="username"
                    inputPlaceholder="Informe o seu Username"
                    value={username}
                    setValue={setUsername}
                />

                <Input
                    inputType="password"
                    inputName="password"
                    inputPlaceholder="Senha"
                    value={password}
                    setValue={setPassword}
                />

                <button onClick={sendLogin} disabled={isLoading} >{isLoading === true ? 'Carregando' : 'Entrar'}</button>
            </form>
        </div>
    );
}
