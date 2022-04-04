import React from 'react';
import './SideBar.css'
import logo from '../../assets/png/logo.png'
import MyButtonSideBar from './../MyButtonSideBar/MyButtonSideBar';
import Map from '../../assets/svg/Map';
import Notes from '../../assets/svg/Notes';
import Recomendation from '../../assets/svg/Recomendation';
import Diagnostic from '../../assets/svg/Diagnostics';
import Profile from '../../assets/svg/Profile';
import Notification from '../../assets/svg/Notification';
import Settings from '../../assets/svg/Settings';
import line from '../../assets/png/line.png'
const mainButtons = [
    { id: 1, text: 'Мои поля', icon: <Map /> },
    { id: 2, text: 'Диагностика', icon: <Diagnostic /> },
    { id: 3, text: 'Рекомендации', icon: <Recomendation /> },
    { id: 4, text: 'Заметки', icon: <Notes /> },
]

const bottomButtons = [
    { id: 1, text: "Профиль", icon: <Profile/>},
    { id: 2, text: "Уведомления 5", icon: <Notification/>},
    { id: 3, text: "Настройки", icon: <Settings/>},
]

const SideBar = () => {

    const [selectedButton, setSelectedButton] = React.useState(1)

    return (
        <div className='sidebar h-screen w-340px flex flex-col'>
            <div className='grow w-320px'>
                <div className='my-20'><img className='w-170px mx-auto' src={logo} /></div>
                <div>
                    {mainButtons.map(x =>
                        <div key={x.id} onClick={() => setSelectedButton(x.id)}>
                            <MyButtonSideBar selectedButton={selectedButton} element={x} />
                        </div>)}
                </div>
            </div>
            <div className='ml-2'>
                <div><img className='w-300px' src={line} alt='line' /></div>
                <div className='flex flex-col text-dark_purple h-230px ml-8 pt-6'>
                    {bottomButtons.map(x => 
                    <button className='flex h-50px mt-2' key={x.id}>
                        <div className='my-auto'>{x.icon}</div>
                        <span className='my-auto ml-3'>{x.text}</span>
                    </button>)}
                </div>
            </div>
        </div>
    );
};

export default SideBar;