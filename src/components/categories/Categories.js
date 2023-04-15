import React from "react";
import { allItems } from "../../constants";
const Categories = () => {
    return (
        <div className="text-amazon_blue w-full h-8 bg-gray-100 flex items-center justify-start">
            <div className="mx-4">
                <ul className="flex flex-row overflow-x-scroll items-center justify-center max-w-[98vw]"
                    style={{scrollbar:"1px"}}>
                {
                        allItems.map(items => (
                            <li  key={items._id} className="text-amazon_blue font-titleFont whitespace-nowrap mx-4" >{items.title}</li>
                    ))
                }
                </ul>
            </div>
        </div>
    )
}

export default Categories;