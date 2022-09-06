import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import { useState } from 'react';
import Alert from "./components/Alert";
import CreatePost from "./components/CreatePost";
import Blog from "./components/Blog";
import SinglePost from "./components/SinglePost";


function App(props) {
    const now = new Date()

    const [message, setMessage] = useState(null)
    const [category, setCategory] = useState(null)
    const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token') && new Date(localStorage.getItem('expiration')) > now) ? true : false)

    const flashMessage = (message, category) => {
        setMessage(message)
        setCategory(category)
    }

    


    const login = () => {
      setLoggedIn(true)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expiration')
    setLoggedIn(false)
}


  return (
    <>
    <Navbar logout={logout} loggedIn={loggedIn}/>
    <div className="container">
    { message ? <Alert message={message} category={category} flashMessage={flashMessage}/> : null}
     <Routes>
      <Route path='/' />
      <Route path='/signup' element={< SignUp flashMessage={flashMessage}/>} />
      <Route path='/login' element={< Login flashMessage={flashMessage} login={login}/>} />
      <Route path='/create-post' element={<CreatePost flashMessage={flashMessage} loggedIn={loggedIn} />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/posts/*' element={<SinglePost />} />
    </Routes>
    </div>
    
    </>
  );
}

export default App;
