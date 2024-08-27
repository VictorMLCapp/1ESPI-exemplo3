
import Nav from './components/Nav'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <>
      <Nav/>
     {/*chama todos os componentes filho*/}
        <Outlet/>
      <Footer/> 
    </>
  )
}

export default App
