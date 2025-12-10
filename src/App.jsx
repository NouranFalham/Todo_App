import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Todos from './components/Todos/Todos'

function App() {

  return (
    <>
        <div className="row containerr">
          <div className="col-12">
              <Header/>
              <Todos/>
              <Footer/>
          </div>
        </div>
    </>
  )
}

export default App
