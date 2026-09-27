import React, { useState } from 'react';
import { questions } from './Data/Question';

export default function faqs() {
    let [currentid,setCurrentid] = useState(questions[0].id)
    let items = questions.map((itemsData,i) => {
        let itemDetails={
            itemsData,
            currentid,
            setCurrentid
        }

        return(
            <FaqItems itemDetails={itemDetails} key={i}/>
        )
    })

    return(
        <div>
            <h1>Fequently Asked Question (FAQ)</h1>
            <div className='faqouter'>
                {items}
            </div>
        </div>
    )
}

function FaqItems({itemDetails}) {
    let { itemsData,currentid,setCurrentid } = itemDetails

    return(
        <div className='faqItems'>
            <h2 onClick={()=>setCurrentid(itemsData.id)}>{itemsData.question}</h2>
            <p className={currentid === itemsData.id ? 'activeAns' : ''}>{itemDetails.itemsData.answer}</p>
        </div>
    )
}