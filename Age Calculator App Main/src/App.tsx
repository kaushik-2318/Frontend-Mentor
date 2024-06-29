import { useState } from 'react'
import './App.css'
import arrow from "./assets/images/icon-arrow.svg"

function App() {

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [errors, setErrors] = useState({ day: "", month: "", year: "" });
  const [ageResult, setAgeResult] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const result = calculateAge(day, month, year);
      setAgeResult(result);
    }
  };

  const validateDate = (day, month, year) => {
    const inputDate = new Date(year, month - 1, day);
    if (
      inputDate.getDate() !== parseInt(day) ||
      inputDate.getMonth() + 1 !== parseInt(month) ||
      inputDate.getFullYear() !== parseInt(year)
    ) {
      return false;
    }
    return true;
  };

  const validate = () => {
    let tempErrors = { day: "", month: "", year: "" };
    const currentYear = new Date().getFullYear();

    if (!day) tempErrors.day = "This field is required";
    else if (!/^(0?[1-9]|[12][0-9]|3[01])$/.test(day))
      tempErrors.day = "Must be a valid day";

    if (!month) tempErrors.month = "This field is required";
    else if (!/^(0?[1-9]|1[0-2])$/.test(month))
      tempErrors.month = "Must be a valid month";

    if (!year) tempErrors.year = "This field is required";
    else if (!/^[0-9]{4}$/.test(year))
      tempErrors.year = "Year must be 4 digits";
    else if (parseInt(year) > currentYear)
      tempErrors.year = "Must be in the past";
    else if (!validateDate(day, month, year))
      tempErrors.day = "The date is invalid";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const calculateAge = (day, month, year) => {
    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    let ageYear = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonth = currentDate.getMonth() - birthDate.getMonth();
    let ageDay = currentDate.getDate() - birthDate.getDate();

    if (ageDay < 0) {
      ageMonth--;
      ageDay += new Date(year, month, 0).getDate();
    }

    if (ageMonth < 0) {
      ageYear--;
      ageMonth += 12;
    }

    return {
      years: ageYear,
      months: ageMonth,
      days: ageDay,
    };
  };



  return (
    <>
      <div className='bg-lightGrey h-screen w-screen flex justify-center items-center flex-col gap-10 p-5'>
        <div className='bg-white rounded-3xl rounded-br-[10rem] md:w-[50%] md:h-[70%] max-h-[500px] max-w-[800px] md:p-10 p-5  w-full' >
          <div className='flex flex-row md:gap-5 gap-2 text-xl text-smokeyGrey'>
            <div className='md:w-40 w-24 flex flex-col gap-2'>
              <div className={`font-bold text-sm tracking-widest ${errors.day ? 'text-lightRed' : ''}`}>DAY</div>
              <input onChange={(e) => setDay(e.target.value)} className={`text-1xl border-2 rounded-xl p-3 focus:outline-none text-black font-bold ${errors.day ? 'border-lightRed' : 'focus:border-purple'}`} type="number" placeholder='DD' />
              <div className='text-sm'>
                {errors.day && (
                  <span className="text-[14px] italic font-normal text-lightRed">
                    {errors.day}
                  </span>
                )}
              </div>
            </div>
            <div className='md:w-40 w-24 flex flex-col gap-2'>
              <div className={`font-bold text-sm tracking-widest ${errors.month ? 'text-lightRed' : ''}`}>MONTH</div>
              <input onChange={(e) => setMonth(e.target.value)} className={`text-1xl border-2 rounded-xl p-3 focus:outline-none text-black font-bold ${errors.month ? 'border-lightRed' : 'focus:border-purple'}`} type="number" placeholder='MM' />
              <div className='text-sm'>
                {errors.month && (
                  <span className="text-[14px] italic font-normal text-lightRed">
                    {errors.month}
                  </span>
                )}
              </div>

            </div>
            <div className='md:w-40 w-24 flex flex-col gap-2'>
              <div className={`font-bold text-sm tracking-widest ${errors.year ? 'text-lightRed' : ''}`}>YEAR</div>
              <input onChange={(e) => setYear(e.target.value)} className={`text-1xl border-2 rounded-xl p-3 focus:outline-none text-black font-bold ${errors.year ? 'border-lightRed' : 'focus:border-purple'}`} type="number" placeholder='YYYY' />
              <div className='text-sm'>
                {errors.year && (
                  <span className="text-[14px] italic font-normal text-lightRed">
                    {errors.year}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className='flex relative w-full md:my-7 my-16'>
            <div className='w-full'>
              <hr />
            </div>
            <div className='w-20 h-20 flex p-5 rounded-full bg-purple absolute md:right-0 -top-10 right-[40%] hover:bg-black duration-500'>
              <img onClick={handleSubmit} src={arrow} alt="arrow" />
            </div>
          </div>

          <div className='text-6xl font-bold italic flex flex-col gap-6'>
            <div>
              <span className='text-purple'>{ageResult.years} </span>
              <span className=''>years</span>
            </div>
            <div>
              <span className='text-purple'>{ageResult.months} </span>
              <span className=''>months</span>
            </div>
            <div>
              <span className='text-purple'>{ageResult.days} </span>
              <span className=''>days</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://github.com/kaushik-2318/Frontend-Mentor/tree/main/Age%20Calculator%20App%20Main">Kaushik Verma</a>.
        </div>
      </div>
    </>
  )
}

export default App
