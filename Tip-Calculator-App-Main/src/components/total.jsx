import React from 'react'


function total({people, bill, tip}) {
    const TipAmount = 4.27;
    const Total = 32.79;

    console.log(people)
    console.log(bill)
    console.log(tip)
    return (
        <div className='bg-[#00474b] rounded-2xl flex flex-col gap-7 p-4 pt-10 pb-5'>
            <div className='flex justify-between'>
                <div>
                    <div className='text-white'>Tip Amount</div>
                    <div className='text-[#4ca1a9]'>/ person</div>
                </div>
                <div className='text-[#26c2ad] text-4xl'>
                    ${TipAmount}
                </div>
            </div>
            <div className='flex justify-between'>
                <div>
                    <div className='text-white'>Total</div>
                    <div className='text-[#4ca1a9]'>/ person</div>
                </div>
                <div className='text-[#26c2ad] text-4xl'>
                    ${Total}
                </div>
            </div>
            <button className='bg-[#26c2ad] w-full rounded-lg p-3 font-[700]'>RESET</button>
        </div>
    )
}

export default total
