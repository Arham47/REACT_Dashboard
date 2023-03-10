import React, {useEffect}from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import {BsChatLeft} from "react-icons/bs";
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import avatar from "../data/data/avatar.jpg";
import {Cart,Chat,Notification,UserProfile} from ".";
import { useStateContext } from '../context/ContextProvider';

const Navbar = () => {

  const NavButton=({title,customFunc,icon,color,dotColor})=>(
    <TooltipComponent
    position='ButtomCenter'
    >
          <button type='button' onClick={customFunc} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
            <span style={{background:dotColor}} className="absolute inline-flex rounded-full h-2 w-2 top-2 right-2"/> {icon}
          </button>
    </TooltipComponent>
  )
  const {activeMenu,setactiveMenu,isClicked,setisClicked,handleClick,screenSize,setscreenSize}=useStateContext(); 
  useEffect(() => {
  const handleSize=()=>  setscreenSize(window.innerWidth);

    window.addEventListener("resize",handleSize);
  
  handleSize();
  return ()=>window.removeEventListener('resize',handleSize);
  }, [])
  useEffect(() => {
   if(screenSize<=900){
    setactiveMenu(false)
   }else{
    setactiveMenu(true)
   }
  }, [screenSize])
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
        <NavButton title="menu" customFunc={()=>setactiveMenu((prev)=>!prev)} color="blue" icon={<AiOutlineMenu/>}/>
        <div className='flex'>
          <NavButton title="cart" dotColor="#03C9D7"customFunc={()=>handleClick("cart")} color="blue" icon={<FiShoppingCart/>}/>
          <NavButton title="chat" customFunc={()=>handleClick("chat")} color="blue" icon={<BsChatLeft/>}/>
          <NavButton title="Notifications" customFunc={()=>handleClick("notification")} color="blue" icon={<RiNotification3Line/>}/>
          <TooltipComponent
          position='BottomCenter'
          content="Profile"
          >
            <div className='flex items-center gap-2 curson-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={()=>handleClick("userProfile")} >
              <img src={avatar} className="rounded-full w-8 h-8"  alt="" srcset="" />
              <p>
                <span className='text-gray-400 text-14'>Hi,</span>{" "}
                <span className='text-gray-400 font-bold ml-1 text-14'>Arham</span>
              </p>
              <MdKeyboardArrowDown className='text-gray-400 text-14'/>
            </div>
          </TooltipComponent>
          {isClicked.cart && <Cart/>}
          {isClicked.chat && <Chat/>}
          {isClicked.notification && <Notification/>}
          {isClicked.userProfile && <UserProfile/>}
        </div>
    </div>
    
  )
}

export default Navbar
