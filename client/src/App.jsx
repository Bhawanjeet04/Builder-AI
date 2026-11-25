import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { GuestLayout,AuthLayout } from './pages/Layout'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import BuilderPage from './pages/BuilderPage'
import PreviewPage from './pages/PreviewPage'
import { Toaster } from 'react-hot-toast'
import PublishModal from './components/PublishModal'
import PublishPage from './pages/PublishPage'


const App = () => {
  return (
   <>
    <Toaster/>
       <Routes>
      {/* Login Routes */}
      <Route element = {<GuestLayout/>}>
          <Route path='/login' element = {<AuthPage mode = "login"/>}/>
          <Route path='/register' element = {<AuthPage mode = "register"/>}/>
      </Route>

      <Route element = {<AuthLayout/>}>
          <Route path='/' element = {<HomePage/>} />
          <Route path='/builder/:id' element = {<BuilderPage/>} />
          <Route path='/preview/:id' element = {<PreviewPage/>} />
      </Route>

      <Route path='/publish/:id' element = {<PublishPage/>}/>

      <Route path = '*' element = {<Navigate to ='/' replace />} />
    </Routes>
   </>
  )
}

export default App
