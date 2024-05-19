import person from '../assets/icons/icon-person.svg'

function people({setpeople}) {
    const totalperson = function (e) {
        setpeople(e.target.value)
    }
    return (
        <div className="flex flex-col relative">
            <div className='mb-3 font-bold'>Number of People</div>
            <input onChange={totalperson} className="border-2 bg-[#f3f8fb] p-1 rounded-md text-[24px] font-[700] text-right text-[#00474b]" placeholder='Enter' type="number" />
            <div className='absolute top-[3.2rem] left-[.5rem]'>
                <img src={person} alt="Icon" />
            </div>
        </div>
    )
}

export default people
