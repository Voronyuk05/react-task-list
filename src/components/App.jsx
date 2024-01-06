import { Component } from "react";
import { TaskList } from "./TaskList/TaskList";

const data = [
  {
    id: 0,
    text: 'Wake up'
  }
]

export class App extends Component {
  render() {
    return (
      <TaskList tasks={data}/>
    )
  }
}
