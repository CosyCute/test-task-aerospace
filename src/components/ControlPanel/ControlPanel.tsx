import React from 'react';
import Warning from './../../assets/svg/Warning';
import Line from './../../assets/svg/Line';
import { useDispatch } from 'react-redux';
interface propsControl {
    zoom: number
    setZoom: Function,
    lineDistance: number
}
const ControlPanel = (props: propsControl) => {

    const [localZoom, setLocalZoom] = React.useState(props.zoom)

    const dispatch = useDispatch()

    React.useEffect(() => {
        setLocalZoom(props.zoom)
    }, [props.zoom])

    return (
        <div>
            <div className='cursor-pointer w-70xp h-70px blur-140px border flex flex-col justify-center'><Warning /></div>
            <div onClick={() => dispatch({ type: 'SET_LINE_MODE_TRUE' })} className='cursor-pointer w-70xp h-70px blur-140px border flex flex-col justify-center my-10px'>
                <Line />
                {props.lineDistance ? <span className='text-center text-white'>{props.lineDistance + "m"}</span> : <></>}
            </div>
            <div className='cursor-pointer w-70px h-150px blur-140px border text-white text-4xl flex flex-col justify-between'>
                <span onClick={() => props.setZoom(localZoom + 1)} className='cursor-pointer h-70px mx-auto flex flex-col justify-center'>+</span>
                <span onClick={() => props.setZoom(localZoom - 1)} className='cursor-pointer h-70px mx-auto flex flex-col justify-center'>—</span>
            </div>
        </div>
    );
};

export default ControlPanel;