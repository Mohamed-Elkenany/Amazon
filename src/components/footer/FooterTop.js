import React from 'react';

const FooterTop = () => {
  return (
      <div className='w-full py-6 bg-white h-64 border border-t-[1px] border-b-[1px]'>
          <div className='w-full h-full  py-8 '>
            <div className='w-full h-full flex flex-col items-center justify-center text-center text-sm'>
              <p>See Personalside recommendation</p>
                  <button className='w-64 bg-yellow-400 py-1 rounded-md hover:bg-yellow-500 active:bg-yellow-700 font-semibold cursor-pointer'>SignIn</button>
                  <p className='mt-1 text-xs'>New Customer?{""}
                      <span className='text-blue-600 ml-1 cursor-pointer'>Start here.</span>
                  </p>
            </div>
        </div>
    </div>
  );
}

export default FooterTop;
