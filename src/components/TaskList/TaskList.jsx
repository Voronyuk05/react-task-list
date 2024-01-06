import { Component } from "react";
import { List , Container, Controler, Input, DeleteButton, SubmitButton } from "./TaskList.styled";


export class TaskList extends Component {

    state = {
        tasks: this.props.tasks,
        inputValue: '',
        itemsAmount: 0
    }

    handleDelete=(e) => {
        console.log(this.state.tasks);
        this.setState((prevState) =>{
            return {
                ...this.state,
                tasks: prevState.tasks.filter(task => task.id !== Number(e.target.id))
            }
        })
    }

    handleCreateTask=(e) => {
        this.setState((prevState) =>{
            return {
                ...this.state,
                itemsAmount: prevState.itemsAmount += 1,
                tasks: [
                    ...prevState.tasks,
                    {
                        id: this.state.itemsAmount,
                        text: this.state.inputValue
                    }
                ]
            }
        })
    }

    handleInputChange=(e) => {
        this.setState({
            ...this.state,
            inputValue: e.target.value
        })
    }

    render () {
        return (
            <Container>
                <Controler>
                    <Input type="text" onChange={this.handleInputChange} />
                    <SubmitButton onClick={this.handleCreateTask}>Додати</SubmitButton>
                </Controler>
                <List>
                    {this.state.tasks.map((task) => (
                        <li id={task.id}>
                            <h3>{task.text}</h3>
                            <DeleteButton id={task.id} onClick={this.handleDelete} >Видалити</DeleteButton>
                        </li>
                    ))}
                </List>
            </Container>
        )
    }
}