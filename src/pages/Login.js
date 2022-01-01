import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signin, signInWithGoogle, signInWithGitHub } from "../helpers/auth";

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            error: null,
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.githubSignIn = this.githubSignIn.bind(this);
        this.githubSignIn = this.githubSignIn.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ error: "" });
        try {
            await signin(this.state.email, this.state.password);
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    async googleSignIn() {
        try {
            await signInWithGoogle();
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    async githubSignIn() {
        try {
            await signInWithGitHub();
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    render() {
        return (
            <div className="container">
                <form autoComplete="off" onSubmit={this.handleSubmit} className="mt-5 py-5 px-5">
                    <h1>
                        Inicia sesión en
                        <Link to="/" className="title ml-2"> Chatty</Link>
                    </h1>
                    <p className="lead">Ingrese el siguiente formulario para acceder a la cuenta.</p>
                    <div className="form-group">
                        <input placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input placeholder="Contraseña" name="password" onChange={this.handleChange} value={this.state.password} type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        {this.state.error ? (<p className="text-danger">{this.state.error}</p>) : null}
                        <button type="submit" className="btn btn-primary px-5">Iniciar sesión</button>
                    </div>
                    <p>También puede ingresar con: </p>
                    <button onClick={this.googleSignIn} type="button" className="btn btn-danger mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                        </svg>
                        Google
                    </button>
                    <button className="btn btn-secondary" type="button" onClick={this.githubSignIn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        GitHub
                    </button>
                    <hr />
                    <p>¿No tienes una cuenta? <Link to="/signup">Regístrate</Link></p>
                </form>
            </div>
        );
    }
}