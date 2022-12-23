import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import "./App.css"

const App = () => {
    const activeMenu=false;
  return (
    <div>
        <BrowserRouter>
        <div className='flex relative bg-main-dark-bg'>
            <div className='fixed right-4 bottom-4' style={{zIndex:"1000"}}>
                <TooltipComponent content="Settings" position='Top'>
                <button type="buttton" className='text-3xl p-3 hover:drop-shadown-xl hover:bg-light-gray text-white' style={{background:'blue',borderRadius:'50%'}}>
                    <FiSettings/>
                </button>
                </TooltipComponent>
            </div>
            {activeMenu ?(
            
                <div className='w-72 fixed sidebar dark:bg-secondry-dark-bg bg-white'>
                    SideBar
                </div>
                
                ):(
                    <div className='w-0 dark:bg-secondry-dark-bg'>
                        SideBar w-0
                    </div>
                )}
                <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu?'md:ml-72':'flex-2'}`}>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg-navbar w-full'>
                        Navbar
                    </div>

                </div>
                <div>
                    <Routes>
                        {/* Dashboard */}
                        <Route path="/" element="ECommerce"/>
                        <Route path="/ECommerce" element="ECommerce"/>
                        {/* Pages */}
                        <Route path="/order" element="order"/>
                        <Route path="/employees" element="employees"/>
                        <Route path="/customers" element="customers"/>
                        {/* app */}
                        <Route path="/kanban" element="kanban"/>
                        <Route path="/editor" element="editor"/>
                        <Route path="/calender" element="calender"/>
                        <Route path="/color-picker" element="color-picker"/>

                        {/* chart */}
                        <Route path="/line" element="line"/>
                        <Route path="/area" element="area"/>
                        <Route path="/bar" element="bar"/>
                        <Route path="/pie" element="pie"/>
                        <Route path="/financial" element="financial"/>
                        <Route path="/pyramid" element="pyramid"/>
                        <Route path="/stacked" element="stacked"/>
                        <Route path="/color-mapping" element="color-mapping"/>
                    </Routes>
                </div>
        </div>
        </BrowserRouter>
        
    </div>
  )
}

export default App
