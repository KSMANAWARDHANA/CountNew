/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react';
import bethel from './assests/bethel.png';
//import team from './assests/team.png';
   const App =()=> {
    const [days, setDays] = useState(10)
    const [hours, setHours] = useState(10)
    const [minutes, setMinutes] = useState(10)
    const [seconds, setSeconds] = useState(10)
  
    const countdown=()=>{
      const endDate = new Date("December 8, 2021 22:00:00").getTime()
      const today = new Date().getTime()
      const timeDiff = endDate - today
  
      const seconds = 1000
      const minutes = seconds*60
      const hours = minutes*60
      const days = hours*24
  
      let timeDays = Math.floor(timeDiff / days)
      let timeHours = Math.floor((timeDiff % days) / hours)
      let timeMinutes= Math.floor((timeDiff % hours) / minutes)
      let timeSeconds= Math.floor((timeDiff % minutes) / seconds)
  
      timeHours = timeHours< 10? "0" + timeHours : timeHours
      timeMinutes = timeMinutes< 10? "0" + timeMinutes : timeMinutes
      timeSeconds = timeSeconds< 10? "0" + timeSeconds : timeSeconds
  
      setDays(timeDays)
      setHours(timeHours)
      setMinutes(timeMinutes)
      setSeconds(timeSeconds)
  
    }
  
    useEffect(() => {
        setInterval(countdown, 1000)
    })
  
  
  return (
    <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
   
       <div className='screen1 max-w-screen-lg m-10 sm:m-12 bg-white shadow  flex justify-center flex-1 rounded-3xl shadow-xl'>
            <div ><div class="absolute w-full -my-64 text-xl xl:text-xl font-semibold  text-red-700 ml-16">BETHEL</div>
            <img src={bethel} alt="" class="ml-5 -my-64  h-8 w-8 object-contain " />
       </div>
     
       <section className="container">
            {/*<h1>React Count Down Timer</h1>*/}
            <div className="countdown">
                 <article>
                  <p>{days}</p>
                  <h3>Days</h3>
                </article> 
                <article>
                  <p>{hours}</p>
                  <h3>Hours</h3>
                </article>
                <article>
                  <p>{minutes}</p>
                  <h3>Minutes</h3>
                </article>
                <article>
                  <p>{seconds}</p>
                  <h3>Seconds</h3>
                </article>
            </div>
        </section>
      </div>
  </div>
  );
};
export default App;