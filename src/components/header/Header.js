import React, { useState } from 'react';
import { logo } from '../../assets';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { allItems } from '../../constants/index';
import HeaderBotttom from './HeaderBottom';
const Header = () => {
    const [showAll, setShowAll]=useState(false)
    return (
      <div className="sticky top-0 z-50">
    <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center'>
            <div className='headerHover'>
              <img className='w-24 mt-2' src={logo} alt='logo' />
                </div>
                <div className='headerHover mr-2'>
                    <LocationOnOutlinedIcon />
                    <p className='flex flex-col text-sm text-lightText font-light'>Deliver To
                        <span className='text-sm font-semibold -mt-1 text-whiteText'>Egypt</span></p>
                </div>
                <div className='h-10 rounded-md flex flex-grow relative items-center'>
                    <span onClick={() => setShowAll(!showAll)} className='w-14 h-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont rounded-tl-md rounded-bl-md'>All
                        <span>
                            <ArrowDropDownOutlinedIcon />
                        </span>
                        </span>
                        {
                        showAll && (
                            <div className='absolute h-80 w-56 top-10 left-0 overflow-y-scroll
                            overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col
                            gap-1 z-50'>
                                <ul>
                                    {
                                        allItems.map(items => (
                                            <li key={items._id} className='text-sm tracking-wide font-titleFont border-b-[1px]
                                            border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200'>{items.title}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )
                    }
                    <input type='text' placeholder="Search Here......." className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2' />
                    <span className='h-full w-12 bg-amazon_yellow flex items-center justify-center
                    rounded-tr-md rounded-br-md hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer'>
                        <SearchOutlinedIcon/>
                    </span>
                </div>
                <div className="flex flex-col items-start justify-center headerHover mx-2">
                    <p className="text-xs text-lightText font-light">Hello, signIn</p>
                    <p className="text-sm font-semibold -mt-1 text-whiteText">Accounts & Lists{""} <span><ArrowDropDownOutlinedIcon/></span></p>
                </div>
                <div className='flex flex-col items-start justify-center headerHover'>
                    <p className="text-xs text-lightText font-light">Return</p>
                    <p className="text-sm font-semibold -mt-1 text-whiteText">& Order</p>
                </div>
                <div className='flex items-center justify-center headerHover relative'>
                    <ShoppingCartOutlinedIcon />
                    <p className='text-xs font-semibold mt-3 text-whiteText'>
                        cart <span className='text-xs absolute font-semibold -top-2 left-6 p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex items-center justify-center'>0</span>
                    </p>
                </div>
            </div>
            <HeaderBotttom/>
    </div>
  );
}

export default Header;
