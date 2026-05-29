import "./App.css";
import React from "react";
import { UserFunction } from "./user";
import { UseChildren } from "./user";
import { UserClass } from "./user";


class App extends React.Component {

/*constructor(){
super();
this.state={
  users: [ {
    name: "Ivan",
    years: 30,
  },
  {
    name: "marko",
    years: 25,
  },
  {
    name: "Ana",
    years: 25,
  },]

  childrenText:"A hobi mi je plivanje"
 }

}
*/

 state={
  users: [ {
    name: "Ivan",
    years: 30,
  },
  {
    name: "marko",
    years: 25,
  },
  {
    name: "Ana",
    years: 25,
  },]

  childrenText:"A hobi mi je plivanje"
 }
 
 
 
 
  render() {
    const{users,childrenText}=this.state;
    return (
      <div className="App">
        <h1>React aplikacija</h1>
        <p>ovo zaista radi</p>
        <UserFunction ime={this.state.users[0].name} godine={this.state.users[0].years} />
        <UserClass ime={users[1].name} godine={users[1].years} />
        <UseChildren ime={users[2].name} godine={users[2].years}>
          I hobi mi je skijanje
        </UseChildren>
      </div>
    );
  }
}
export default App;
