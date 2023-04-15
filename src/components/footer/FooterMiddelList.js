import React from "react";

const FooterMiddleList = ({title, listItem})=>{
    return (
        <div>
            <h3 className="font-titleFont text-white text-base font-semibold mb-3">{title}</h3>
            <ul className="flex flex-col gap-2 font-bodyFont text-sm">
                {
                    listItem.map(item => item.listData.map((data,i) => (
                        <li key={i} className="cursor-pointer py-2 h-[80%] hover:underline border-gray-300 w-fit">{data}</li>
                    )))
                }
            </ul>
        </div>
    )
}
export default FooterMiddleList;