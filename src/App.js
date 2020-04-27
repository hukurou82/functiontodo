import React, { useState } from 'react';
import TodoList from './TodoList';

//関数コンポーネント
const App = () => {
   

    return(
        <div>
            <TodoList />
        </div>
    )
}
/*
//クラスコンポーネント
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
       return (
           <div>
               <p>{this.state.count}押した</p>
               <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                   押す
               </button>
           </div>
       )
    }
}
*/


export default App;