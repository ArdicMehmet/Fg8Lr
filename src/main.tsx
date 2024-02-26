import * as React from "react"
import ReactDOM from 'react-dom/client'


import App from './App.tsx'
import './index.css'
import './styles/font.css'
import './styles/color.css'
import './styles/general.css'

// const bookStore: Store<BookState, BookAction> & {
//   dispatch: DispatchBookType
// } = createStore(reducer.bookReducer, applyMiddleware(thunk))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
      <App />
  </>,
)

