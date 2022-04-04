import React from 'react';
import { useDispatch } from 'react-redux';

const PolygonSideBarItemDefault = () => {

    const [inputText, setInputText] = React.useState('')

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }

    const dispatch = useDispatch()

    const blurHandler = () => {
        dispatch({type: "SET_POLYGON_NAME", name: inputText})
    }

    return (
        <div>
            <div className='w-300px mx-auto mt-10 flex justify-between'>
                <div className='w-40px h-40px'><img alt="field img"/></div>
                <div className='flex flex-col w-120px'>
                    <input className='bg-transparent border-2' type='text' onBlur={blurHandler} onChange={inputHandler} placeholder='Введите имя' />
                    <span className='text-gray-500'>{"Культура"}</span>
                </div>
                <div className='text-green-300'>{0.03}</div>
            </div>
            <div className='w-full text-center'>{"Заражения"}</div>
        </div>
    );
};

export default PolygonSideBarItemDefault;