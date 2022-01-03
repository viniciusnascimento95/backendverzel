import React, { useState } from 'react';
import { Tabs, Tab, Container, Row, Col, Card } from 'react-bootstrap';
import { Input } from '../components/Input'
import { execRequest } from '../services/api';

export const Login = props => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msgErro, setMsgErro] = useState('');
    const [isLoading, setLoading] = useState(false);


    const sendCreteLogin = async evento => {
        try {
            // evento.preventDefault();
            setLoading(true);
            setMsgErro('');

            const body = {
                username,
                password
            };

            const responseApi = await execRequest('register/newuser', 'post', body)
            if (responseApi?.data?.access) {
                localStorage.setItem('accessToken', responseApi.data.access);
                localStorage.setItem('usernameLogin', responseApi.data.username);
                props.setAccessToken(responseApi.data.access);
            }
            alert('Usuário criado com sucesso!');
            window.location.reload();
            // console.log(responseApi);
        } catch (e) {
            if (e?.response?.data?.detail) {
                setMsgErro(e.response.data.detail);
            }
            console.log(e);
        }
        setLoading(false);

    }

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
            if (responseApi?.data?.access) {
                localStorage.setItem('accessToken', responseApi.data.access);
                localStorage.setItem('usernameLogin', responseApi.data.username);
                props.setAccessToken(responseApi.data.access);
            }
            // console.log(responseApi);
        } catch (e) {
            if (e?.response?.data?.detail) {
                setMsgErro(e.response.data.detail);
            }
            console.log(e);
        }
        setLoading(false);
    }

    return (
        <>
            <Container style={{ padding: '20px' }}>
                <Row>
                    <Col sm={6}><Card>
                        <Card.Header>Desafio Fullstack Python <a href="https://www.verzel.com.br/">Verzel</a></Card.Header>
                        <Card.Body>
                            <Card.Title>Repositorio</Card.Title>
                            <Card.Text>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                                </svg>
                                <a target="_blank" href="https://github.com/viniciusnascimento95/backendverzel"> Documentação </a>
                            </Card.Text>
                        </Card.Body>
                    </Card></Col>
                    <Col sm={6}><Tabs defaultActiveKey="Login" id="" className="mb-3">
                        <Tab eventKey="Login" title="Login">
                            <div className="container-login">

                                <form>
                                    <h3>Login</h3>
                                    {msgErro && <p>{msgErro}</p>}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                                        <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                    </svg>
                                    <Input
                                        inputType="text"
                                        inputName="username"
                                        inputPlaceholder="Informe o seu username"
                                        value={username}
                                        setValue={setUsername}
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
                                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                    </svg>

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
                        </Tab>
                        <Tab eventKey="Register" title="Criar conta">
                            <div className="container-login">

                                <form>
                                    <h3>Criar Conta</h3>
                                    {msgErro && <p>{msgErro}</p>}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                                        <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                    </svg>
                                    <Input
                                        inputType="text"
                                        inputName="username"
                                        inputPlaceholder="Informe um username"
                                        value={username}
                                        setValue={setUsername}
                                    />

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
                                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                    </svg>
                                    <Input
                                        inputType="password"
                                        inputName="password"
                                        inputPlaceholder="Informe uma senha"
                                        value={password}
                                        setValue={setPassword}
                                    />

                                    <button onClick={sendCreteLogin} disabled={isLoading} >{isLoading === true ? 'Carregando' : 'Criar conta'}</button>
                                </form>
                            </div>
                        </Tab>
                    </Tabs></Col>
                </Row>

            </Container>

        </>
    );
}
