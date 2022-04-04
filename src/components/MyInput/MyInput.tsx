import React from 'react';
import './MyInput.css'
import Password from '../../assets/svg/Password';
import Email from './../../assets/svg/Email';
interface propsMyInput{
    onChange: Function,
    type: string,
    placeholder: string
}

const MyInput = (props: propsMyInput) => {

    return (
        <div className='relative grow'>
           <input autoComplete='on' onChange={(e) => props.onChange(e.target.value)} type={props.type} className='pl-16 myinput bg-transparent' placeholder={props.placeholder}/>
           <div className='absolute bottom-7 left-6'>{props.type === 'email' ? <Email/> : <Password/>}</div>
        </div>
    );
};

export default MyInput;