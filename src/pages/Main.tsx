import React from 'react';
import SideBar from './../components/SideBar/SideBar';
import Fields from '../components/Fields/Fields';
import Map from '../components/Map/Map';
const Main = () => {
    return (
        <div className='font-Roboto flex'>
            <SideBar />
            <div className='relative'><Fields /></div>
            <Map />
        </div>
    );
};

export default Main;