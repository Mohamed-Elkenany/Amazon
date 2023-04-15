import React, { useEffect, useRef, useState } from "react";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion"
const HeaderBotttom = () => {
    const ref = useRef();
    const [sidebar, setSidebar] = useState(false)
    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (e.target.contains(ref.current)) {
                setSidebar(false)
            }
        },[ref,sidebar])
    })
    return (
        <div>
        <div className="px-2 w-full h-[36px] bg-amazon_light text-white flex items-center justify-start">
            <ul className="ms-6 flex items-center gap-6">
                <li  onClick={()=>setSidebar(true)} className="headerHover"><MenuOutlinedIcon/>All</li>
                <li className="headerHover">Today's Deals</li>
                <li className="headerHover">Customer Service</li>
                <li className="headerHover">Gift Cards</li>
                <li className="headerHover">Registery</li>
                <li className="headerHover">Sell</li>
            </ul>
            </div>
            {
                sidebar && (
                    <div className="z-50 fixed h-screen w-full top-0 left-0  bg-amazon_blue bg-opacity-50">
                        <motion.div ref={ref} initial={{x:-500,opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5}} className="relative w-full h-full">
                            <div className="bg-white h-full w-[350px] border border-black">
                                <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                                    <AccountCircleIcon />
                                    <h3 className="text-sm">Hello, SignIn</h3>
                                </div>
                            </div>
                                <div onClick={()=>setSidebar(false)} className="absolute text-black top-4 left-[360px] bg-white cursor-pointer"><CloseIcon/></div>
                        </motion.div>
                    </div>
                )
            }
        </div>
    )
}

export default HeaderBotttom;