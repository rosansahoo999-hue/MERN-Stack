export function ProductItems({pdata}){
    
    return(
         <div className='shadow-lg pb-4'>
                <img src={pdata.thumbnail} alt="" className="w-100% h-56" />
                <h4>
                    {pdata.title}
                </h4>
                <b>Rs {pdata.price}</b>
              </div>
    )
}