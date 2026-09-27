import React from "react";

function Categorical({finalcategory, setCatName}){

    let cat=finalcategory.map((v, i)=>{
        return(
           <li onClick={()=>setCatName(v.name)} key={i} className="bg-[#ccc] p-1.75 cursor-pointer text-[20px] font-serif font-medium mb-2">
            {v.name}
           </li> 
        )
    })

    return(
        <div>
            <h3 className="text-[25px] font-medium text-left p-2.5">Product Category</h3>

            <ul className="text-left">
                {cat}
            </ul>
        </div>
    )
}

export default Categorical;