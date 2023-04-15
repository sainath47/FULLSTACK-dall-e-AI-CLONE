import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {Home, PostCreate} from './pages'
import {logo} from './assets';
const App = () => {
  return (
<BrowserRouter>
<header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-blue-500'>
<Link to='/'> 
<img src={logo} alt="logo" className='w-28 object-contain'/>
</Link>

<Link to="/create-post" className='font-inter font-medium bg-purple-500 text-white px-4 py-2 rounded-md'>Create</Link>
</header>

<main className='sm:p-8 px-4 py-8 w-full bg-grey-200 min-h-[calc(100vh - 73px)] '>
<Routes>
  <Route path='/' element={<Home/>}  />
  <Route path='/create-post' element={<PostCreate/>}  />
</Routes>
</main>
</BrowserRouter>
  )
}

export default App