import React from 'react';
import Calendar from './../../assets/svg/Calendar';
interface propsWeather {
    currentWeather: string,
    icon: string,
    temp: number
}

const date = new Date()

const DataAndWeather = (props: propsWeather) => {
    return (
        <div className='flex justify-between h-70px w-280px text-white'>
            <div className='h-full w-200px blur-140px border text-center flex justify-center text-xl'>
                <span className='my-auto'>
                    {date.getDay() + "." + date.getMonth() + '.' + date.getFullYear()}
                </span>
                <div className='my-auto ml-6'>
                    <Calendar />
                </div>
            </div>
            <div className='w-70px blur-140px border flex flex-col'>
                <img className='w-50px mx-auto' src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt={props.currentWeather}/>
                <span className='text-center w-70px -mt-2'>{Math.round(props.temp - 273) > -100 ? Math.round(props.temp - 273) + '°C' : ""}</span>
            </div>
        </div>
    );
};

export default DataAndWeather;