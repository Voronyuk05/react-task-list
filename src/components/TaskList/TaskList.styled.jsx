import styled from 'styled-components';

export const Container = styled.div`
    margin: 50px 0px 0px 50px;
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: red 1px solid;
    border-radius: 10px;
    padding: 20px;
`

export const List = styled.ul`
width: 100%;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content: flex-start;
`

export const Controler = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`

export const Input = styled.input`
    width: 300px;
    height: 35px;
    border-radius: 20px;
`

const Button = styled.button`
    width: 150px;
    height: 35px;
    border: none;
    border-radius: 15px;
`

export const SubmitButton = styled(Button)`
    background-color: #008cff;
`

export const DeleteButton = styled(Button)`
    background-color: crimson;
    color: white;
`