import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Components/Layout/Layout'
import Introduction from './Components/Sections/Introduction/Introduction';
import TypesandAnnotations from './Components/Sections/Types-and-Annotations/Types-and-Annotations';
import UnionsandLiterals from './Components/Sections/Unions-and-Literals/Unions-and-Literals';

function App() {

  return (
  <>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/Introduction" element={<Introduction />} />
          <Route path="/Types-and-Annotations" element={<TypesandAnnotations />} />
          <Route path="/Unions-and-Literals" element={<UnionsandLiterals />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
  </>
  )
}

export default App
