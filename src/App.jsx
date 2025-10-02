import './App.css'
import Form from './componets/Form'
import List from './componets/List'

function App() {
  return (
    <div className='container'>
      <h1>To-Do List:</h1>
      <Form />
        <div className='list-container'>
         <List />
        </div>
    </div>
  )
}

export default App
