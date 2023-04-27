import { Route, Routes } from 'react-router-dom'

import './App.css'

import { Inbox } from './pages/inbox'
import { Spam } from './pages/spam'
import { Trash } from './pages/trash'
import { Mail } from './pages/mail'
import { Header } from './components/header'
import { NavBar } from './components/navbar'

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path='/' element={<Inbox />} />
        <Route path='/spam' element={<Spam />} />
        <Route path='/trash' element={<Trash />} />
        <Route path='/mail/:mailID' element={<Mail />} />
      </Routes>
    </>
  )
}

export default App
