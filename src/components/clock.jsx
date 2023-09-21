import React, {useState} from 'react'
import './clock.css'

export default function Clock() {
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  setInterval(() => {
  let dateToday = new Date();
  if(dateToday.getHours() <= 9){
    setHours('0' + dateToday.getHours())
  } else {setHours(dateToday.getHours())};

  if(dateToday.getMinutes() <= 9){
    setMinutes('0' + dateToday.getMinutes())
  } else {setMinutes(dateToday.getMinutes())};

  if(dateToday.getSeconds() <= 9){
    setSeconds('0' + dateToday.getSeconds())
  } else {setSeconds(dateToday.getSeconds())};
},1000);

  return (
    <div className='relogio'>
      <div>
        <span id='horas'>{hours}</span>
        <span className='tempo'>Horas</span>
      </div>

      <div>
        <span id='minutos'>{minutes}</span>
        <span className='tempo'>Minutos</span>
      </div>

      <div>
        <span id='segundos'>{seconds}</span>
        <span className='tempo'>Segundos</span>
      </div>
    </div>
  )
}