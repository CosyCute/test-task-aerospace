import React from 'react';
import selected from '../../assets/png/selected.png'
import './MyButtonSideBar.css'
interface buttonProps {
    element: {
        id: number,
        text: string,
        icon: JSX.Element
    },
    selectedButton: number
}
const MyButtonSideBar = (props: buttonProps) => {

    const isSelected = props.selectedButton === props.element.id ? true : false;

    return (
        <div className={`max-w-300px flex justify-between h-50px mt-2 w-full relative ${isSelected ? 'text-white' : 'text-dark_purple'} `}>
            <div className='flex'>
                <div className={`mybutton ml-10 my-auto ${isSelected ? 'selected' : ''}`}>{props.element.icon}</div>
                <span className='my-auto ml-3'>{props.element.text}</span>
            </div>
            {isSelected
                ?
                <div><img className='h-full' src={selected} /></div>
                : <></>}
        </div>
    );
};

export default MyButtonSideBar;