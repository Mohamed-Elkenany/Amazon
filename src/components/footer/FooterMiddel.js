import React from 'react';
import { middleList } from '../../constants';
import FooterMiddleList from './FooterMiddelList';
import {bdFlag, logo} from "../../assets/index"
const FooterMiddel = () => {
  return (
    <div className='bg-amazon_light w-full text-white'>
        <div className="w-full border-b-[1px] border-gray-500 py-10">
          <div className='max-w-5xl mx-auto text-gray-300'>
                  <div className='w-full grid grid-cols-4 place-items-center items-start'>
                      {
                          middleList.map(item => (
                              <FooterMiddleList
                                  key={item._id}
                                  title={item.title}
                                  listItem={item.listItem}
                              />
                          ))
                      }
              </div>
      </div>
    </div>
          <div className='w-full flex items-center justify-center gap-4 py-4 '>
              <img className='w-20 mt-4 cursor-pointer' src={logo} alt="logo"/>
              <div className="border p-1  cursor-pointer">
                  <h2>English</h2>
              </div>
              <div className="flex gap-1 border p-1 cursor-pointer">
                  <img className="w-10" src={bdFlag} alt='cuntery' />
                  <p>Bangladesh</p>
              </div>
         </div>
    </div>
  );
}

export default FooterMiddel;
