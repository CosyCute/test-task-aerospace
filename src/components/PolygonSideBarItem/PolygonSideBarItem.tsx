import React from 'react';
import { fieldType } from './../../types/index';

const PolygonSideBarItem = (props: fieldType) => {

    return (
        <div className='mr-4'>
            <div className='w-300px mx-auto mt-10 flex justify-between'>
                <div className='w-40px h-40px'><img alt="field img" /></div>
                <div className='flex flex-col w-120px'>
                    {props.main_info.name}
                    <span className='text-gray-500'>{props.main_info.culture}</span>
                </div>
                <div className='text-green-300'>{props.main_info.numbers}</div>
            </div>
            <div className='w-full text-center'>{props.main_info.type}</div>
        </div>
    );
};

export default PolygonSideBarItem;