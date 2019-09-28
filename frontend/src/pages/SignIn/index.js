import React, {
    Component
} from 'react'

import {
    Link,
    withRouter
} from 'react-router-dom'

import Logo from '../../assets/logo-airbnb.svg';
import api from '../../services/api';

import {
    login
} from '../../services/auth'

import { Container, Form } from './style';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    }
    handleSignIn = async e => {
        e.preventDefault();

        const {
            email,
            password
        } = this.state
        console.log(this.state)
        if (!email || !password) {
            this.setState({
                error: "Preencha e-mail e senha para continuar!"
            })
        } else if (password.length < 6) {
            this.setState({
                error: "A senha deve conter ao menos 6 digitos"
            })
        } else {
            try {
                const response = await api.post('/sessions', {
                    email,
                    password
                });
                login(response.data.token);
                this.props.history.push('/app');
            } catch (err) {
                console.log(err);
                this.setState({
                    error: "Houve um problema com o login, verifique suas credenciais."
                })
            }
        }

    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSignIn}>
                    <img src={Logo} alt="Airbnb logo" />
                    {this.state.error && <p>{this.state.error}</p>}
                    <input
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <button type="submit">Entrar</button>
                    <hr />
                    <Link to="/signup">Criar conta grátis</Link>
                </Form>
            </Container>
        );
    }
}

export default withRouter(SignIn);
