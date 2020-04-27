import React from 'react'
import ReactDOM from 'react-dom'//Reactで作った要素をHTMLに埋め込んでくれる

import App from './App'//componentsの中のApp.jsを読み込んでいる。読み込んで下のReactDOM.render(<App />)に入れている

ReactDOM.render(<App />, document.getElementById("root"))//index.htmlのid=rootの中にApp.jsの中身を入れている