import React from 'react';
import { footerBottomItem } from '../../constants';

const FooterBottom = () => {
  return (
    <div className='w-full bg-footerBottom py-8'>
      <div className='max-w-5xl mx-auto'>
        <div className='text-white grid grid-cols-7 place-content-center  gap-4'>
          {
            footerBottomItem.map(item => (
              <div className='group cursor-pointer' key={item._id}>
                <h3 className='group-hover:underline mb-[2px]'>{item.title}</h3>
                <p className='text-sm tracking-tight text-[#999] '>{item.des}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
