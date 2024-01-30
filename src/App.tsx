import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button.tsx'
import MenubarDemo from './components/end_components/menubar.tsx'


function App() {

  return (
    <div className='flex flex-col h-screen w-screen'> {/*+flex*/}
      <section className='flex flex-col flex-grow justify-between bg-slate-800 '>
        <header className='flex flex-col w-full min-h-10 max-h-20 shadow-lg shadow-slate-700'>
          <div className='flex w-auto items-center justify-between'>
            <div className='flex text-center items-center'>
              <img src="src/assets/XRB.png" className=" m-3 rounded-3xl border-4 max-w-8 max-h-8" />
              <div className='text-white text-lg font-semibold border-4 border-transparent'>The Radix Hub</div>
            </div>
          
            {/*Colocar lista de items do header (menubar)*/}
            {/*<span className="text-xl font-bold m-3">Header</span>*/}
            
            <div className='w-auto items-end'><Button className='m-3'>Launch dApp</Button></div>
          </div>
        </header>

        <div title="Content" className='flex bg-slate-700 w-full flex-grow'> {/*- h-screen*/}
          <div className='w-full h-full overflow-hidden'> {/*+h-screen-20 h-screen-10 overflow-hidden | -max-h-full overflow-auto*/}
            <div className='flex px-20 justify-between items-center w-full h-full '>
              <div className='text-transparent'>a</div>
              <div className='flex flex-col items-center'>
                <h1 className=''>The Radix Hub</h1>
                <div><a href='https://github.com/TheRadixHub' className=' text-3xl'>Under development</a></div>
              </div>
              <div className=' text-transparent'>a</div>
            </div>
          </div>
        </div>

        <footer className='flex flex-col justify-between items-center text-center bg-slate-900'>
          <div className="flex w-full h-fit">
            <div className='flex justify-between px-12 w-full'>
              <div title="Footer SNSs" className='flex flex-row m-3 bg-transparent text-transparent'>
                <div className='p-2'>discord</div>
                <div className='p-2'>X</div>
                <div className='p-2'>whitepaper</div>
              </div>
              <div title="Feedback link" className='flex flex-row w-fit m-3 items-center text-center text-transparent'>
                <div>a</div>
                <div>Feedback</div>
              </div>
              </div>
          </div>

        </footer>
      </section>
    </div>
  )
}

export default App