import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #eee;
    font-family: Arial, Helvetica, sans-serif;
`

export const Form = styled.form `
    padding: 10px;
    width: 400px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 100px;
        margin: 10px 0 40px;
    }
    p {
        color: #ff3333;
        margin-bottom: 15px;
        border: 1px solid #ff3333;
        padding: 10px;
        width: 80%;
        text-align: center;
        border-radius: 4px;
    }
    input {
        height: 46px;
        margin-bottom: 15px;
        padding: 0 20px;
        color: #777;
        font-size: 15px;
        width: 80%;
        border: 1px solid #ddd;
        &::placeholder {
        color: #999;
        }
    }
    button {
        color: #fff;
        font-size: 16px;
        background: #fc6963;
        height: 56px;
        border: 0;
        border-radius: 5px;
        width: 80%;
    }
    hr {
        margin: 20px 0;
        border: none;
        border-bottom: 1px solid #cdcdcd;
        width: 100%;
    }
    a {
        margin-top: 20px;
        margin-bottom: 20px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16;
        font-weight: bold;
        color: #999;
        text-decoration: none;
    }
`