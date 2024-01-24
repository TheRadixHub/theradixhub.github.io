import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button.tsx'


function App() {
  

  return (
    <>
      <div className='align-middle bg-slate-500'>

        <div><h1>The Radix Hub <img src="src/assets/XRB.png" className=" max-w-8 max-h-8" /></h1></div>
        <Button>Button</Button>
        <div className="card">
        </div>
      </div>
    </>
  )
}

export default App
