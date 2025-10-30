import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router'

import MapDisplay from './components/MapDisplay/MapDisplay'
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MapDisplay />} />
      </Routes>
    </Router>
  )
}

export default App