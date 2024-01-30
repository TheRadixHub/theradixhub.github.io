import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button.tsx'
import MenubarDemo from './components/end_components/menubar.tsx'


function App() {

  return (
    <div className='flex-col h-screen w-screen'>
      <section className='flex flex-col  justify-between bg-slate-800 '>
        <header className='flex flex-col w-screen min-h-10 max-h-20 shadow-lg shadow-slate-700'>
          <div className='flex items-center justify-between'>
            <div className='flex text-center items-center'>
              <img src="src/assets/XRB.png" className=" m-3 rounded-3xl border-4 max-w-8 max-h-8" />
              <div className='text-white text-lg font-semibold border-4 border-transparent'>The Radix Hub</div>
            </div>
          
            {/*Colocar lista de items do header (menubar)*/}
            {/*<span className="text-xl font-bold m-3">Header</span>*/}
            
            <div className='w-max items-end'><Button className='m-3'>Launch dApp</Button></div>
          </div>
        </header>

        <div title="Content" className='flex bg-slate-700 w-screen h-auto'>
          <div className='flex px-20 justify-between items-center w-screen h-screen overflow-clip'>

            <div className='text-transparent'>a</div>
            <h1>The Radix Hub</h1>
            <div className=' text-transparent'>a</div>

          </div>
        </div>

        <footer className='flex flex-col w-screen text-center items-center bg-slate-900 '>
          <div className="flex w-screen h-auto justify-between px-12">
            <div title="Footer SNSs" className='flex flex-row m-3 text-white bg-transparent'>
              <div className='p-2'>discord</div>
              <div className='p-2'>X</div>
              <div className='p-2'>whitepaper</div>
            </div>
            <div title="Feedback link" className='flex flex-row items-center text-center text-white'>
              <div>a</div>
              <div>Feedback</div>
            </div>
          </div>

        </footer>
      </section>
    </div>
  )
}

export default App