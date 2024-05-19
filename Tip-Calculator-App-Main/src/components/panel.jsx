import Amount from './amount'
import Tip from './tip'
import Person from './people'
import Total from './total'

export default function Panel({ setBill, bill, people, setpeople, tip, setTip }) {
    return (
        <>
            <div className="bg-[White] rounded-3xl h-screen w-screen p-5 flex flex-col gap-8 md:gap-0 md:flex-row md:h-[30rem] md:w-full md:p-0">
                <div className='flex flex-col'>
                    <Amount setBill={setBill} />
                    <Tip setTip={setTip} />
                    <Person setpeople={setpeople} />
                </div>
                <Total bill={bill} people={people} tip={tip} />
            </div>
        </>
    )
}