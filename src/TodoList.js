import React, { useState } from 'react';

const TodoList = () => {

    const initialState = [
        {
            task: '洗濯',
            isCompleted: false
        },
        {
            task: '掃除',
            isCompleted: false
        },
        {
            task: '食事',
            isCompleted: false
        }
    ]

    const [todos, setTodo] = useState(initialState);//todosにinitialStateの配列を入れている
    const [task, setTask] = useState('');//input valueのtaskに入力したデータを保持しておく変数

    //テキストボックス「追加する」に入力されると実行される関数
    const handleNewTask = e => {
        setTask(e.target.value)//setTaskとはtaskにinput～onChange={handleNewTask}で入力されたものをセットする。テキストボックスに表示される
    }

    //form onSubmit={ handeleSubmit }がエンターを押されると実行される関数
    const handeleSubmit = e => {
        e.preventDefault()//画面が遷移しないようにするメソッド
        if(task === '') return//task(追加を押すと{ task }にデータが入るはずなので、データが無ければ処理がここで終わる)
        setTodo(todos => [...todos,{task, isCompleted: false}])//todosに入っているtaskとisCompletedを取ってくる。その次にinputでtaskに入れたデータの中身が入ってくる。isCompletedは固定でfalse
        setTask('')//inputに入力されていた文字を空にする
    }

    return (
        <div>
            <p>ひとまず</p>
            <form onSubmit={ handeleSubmit }>{/* エンターを押されると実行されるOnSubmit　実行される関数はhandleSubmit*/}
            追加する<input value={ task } placeholder="追加" onChange={handleNewTask}/>{/*//onChangeは文字を入力されるたびにイベントが発行される*/}
            <button>追加</button>
            </form>
            <ul>
                {todos.map((todo, index) => (//todosの配列に入っているものを取る。indexは配列のインデックス番号
                    <li key={ index }>{ todo.task }</li>//todosのインデックスを取ってきてそれに合わせたtaskを表示して配列の最後までループ
                ))}
            </ul>
        </div>
    )

}

export default TodoList;