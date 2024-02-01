{/*import { useState } from 'react'*/}
import './App.css'
import { Button } from './components/ui/button.tsx'


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
          
            {/*Headers list*/}
            
            <div className='w-auto items-end'><Button className='m-3'>Launch dApp</Button></div>
          </div>
        </header>

        <div title="Content" className='flex bg-slate-700 w-full flex-grow'>
          <div className='w-full h-full overflow-hidden'>
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
              <div className='flex flex-row m-3 bg-transparent text-transparent max-h-10 items-center'>
                
                <a title='Discord' href="" className='mx-2'><img src='src/assets/discord_icon_white.svg' className='w-8 h-8'></img></a>
                <a title='X' href="https://twitter.com/TheRadixHub" className='mx-2'><img src='src/assets/twitter_x_icon_white.svg' className='w-8 h-8'></img></a>
                <a title="Whitepaper" href="https://bridge-route-x.gitbook.io/project-overview/" className='mx-2'><img alt="Whitepaper" src='src/assets/gitbook_white.svg' loading="lazy" className='w-8 h-8'></img></a>
                <a title="Github" href='https://www.github.com/TheRadixHub' className='mx-2'><img link='www.google.com' src='src/assets/github_icon_white.svg' loading="lazy" className='w-8 h-8'></img></a>
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