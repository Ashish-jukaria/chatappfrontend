
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthContextProvider } from './Components/AuthProvider'
import { ProtectedRoute } from './Components/ProtectedRoute'
import { Navbar } from './Components/Navbar'
import { Login } from './Components/Login'
import { Register } from './Components/Register'
import { Dashboard } from './Components/Dashboard'
import { Home } from './Components/Home'
import { ChatRoom } from './Components/ChatRoom'
import { WebSocketProvider } from './Components/WebSocketProvider'
import { CreateRoom } from './Components/CreateRoom'
import { YourRooms } from './Components/YourRooms'
import { JoinRoom } from './Components/JoinRoom'

function App() {

  return (
    <>
    <BrowserRouter>
    <AuthContextProvider>
    <WebSocketProvider>
    <Navbar/>
     
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />

      <Route element={<ProtectedRoute/>}>
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/chatroom' element={<ChatRoom/>}/>
      <Route path='/createroom' element={<CreateRoom/>}/>
      <Route path='/yourroom' element={<YourRooms/>}/>

      <Route path='/joinrooms' element={<JoinRoom/>}/>
      </Route>

    </Routes>
    </WebSocketProvider>
    </AuthContextProvider>
    
    </BrowserRouter>
   
      
    </>
  )
}

export default App
