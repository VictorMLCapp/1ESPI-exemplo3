import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*instalando o pacote de dependencias para criar as rotas*/ 
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Aluno from './routes/Aluno.jsx'
import Home from './routes/Home.jsx'


//criando a função createBrowserRouter
const router= createBrowserRouter([

{
  /*criando os elementos pai*/ 
  path:'/', element:<App/>,
  errorElement:<Error/>,

  //CRIANDOS OS ELEMENTOS FILHO
  
  children:[
    {path:'/', element: <Home/>},
    {path:'/aluno', element: <Aluno/>},
  ]
  }


])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* criando a desestruturação para que seja renderizada*/}
    <RouterProvider router={router} />
  </StrictMode>,
)
