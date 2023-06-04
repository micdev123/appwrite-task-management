
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RegisterAuth } from './routes/Auth/RegisterAuth'
import Home from './routes/Home/Home'

import Category from "./routes/SingleCategory/Category"
import { LoginAuth } from './routes/Auth/LoginAuth'
import Projects from './routes/Projects/Projects'

function App() {

  return (
    <BrowserRouter>
      <div className=''>
        <Routes>
          <Route exact path="/" element={<LoginAuth />} />
          <Route path="/registerAuth" element={<RegisterAuth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
