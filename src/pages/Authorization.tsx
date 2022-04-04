import React from 'react';
import logo from './../assets/png/logo.png';
import MyInput from './../components/MyInput/MyInput';

interface propsAuth{
    setAuthorized: Function
}

const Authorization = (props: propsAuth) => {

    const [login, setLogin] = React.useState('');

    const [password, setPassword] = React.useState('');

    const [passwordVisible, setPasswordVisible] = React.useState('password')

    const passwordHandler = () => {
        if (passwordVisible === 'password') setPasswordVisible('')
        else setPasswordVisible('password')
    }

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(login, password)
        props.setAuthorized(false)
    }

    return (
        <div className="authorization h-screen flex flex-col text-white">
            <div className='flex justify-center'>
                <div className='my-100px'><img src={logo}/></div>
            </div>
            <div className='auth-fields w-640px h-575px mx-auto'>
                <div className='mx-auto px-100px'>
                    <div className='text-24px mt-60px'>
                        <button>Вход</button>
                        <button className='ml-2'>Регистрация</button>
                    </div>
                    <form onSubmit={submitForm} className='flex flex-col justify-between h-400px'>
                        <div className='mt-4'>
                            <MyInput onChange={setLogin} type="email" placeholder='agro@gmail.com' />
                        </div>
                        <div className='mt-4 relative flex'>
                            <MyInput onChange={setPassword} type={passwordVisible} placeholder='•••••••••••' />
                            <button onClick={passwordHandler} type='button' className='absolute right-5 top-5'>Показать</button>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <span className='ml-2'>Запомнить меня</span>
                        </div>
                        <div className='w-full'>
                            <button type='submit' className='login-button w-full h-60px text-yellow-300'>Войти</button>
                        </div>
                        <div className='text-yellow-300 text-center'>Забыли пароль?</div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Authorization;