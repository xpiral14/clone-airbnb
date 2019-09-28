import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Container, Form } from './style';
import Logo from '../../assets/logo-airbnb.svg'

import api from '../../services/api'

class SignUp extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        error: ''
    };
    handleSignUp = async (e) => {
        e.preventDefault();

        const { username, email, password } = this.state;
        if (!username || !email || !password) {
            this.setState({ error: "Preencha todos os dados para se cadastrar" });
        }else if(password.length < 6){
            this.setState({error: "A senha deve conter mais de 6 digitos"})
        }         
        else {
            try {
                await api.post("/users", { username, email, password });
                this.props.history.push("/");
            } catch (err) {
                console.log(err);
                this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
            }
        }
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSignUp}>
                    <img src={Logo} alt="Logo Airbnb" />
                    {this.state.error && <p>{this.state.error}</p>}
                    <input
                        type="text"
                        placeholder="Nome de Usuário"
                        onChange={e => this.setState({ username: e.target.value })}
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="senha"
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <hr />
                    <button type="submit">Cadastrar-se</button>

                    <Link to="/">Fazer Login</Link>
                </Form>
            </Container>
        )
    }
}

export default withRouter(SignUp);