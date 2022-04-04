import React, { useState, useEffect } from 'react';
import Edit from './../../assets/svg/Edit';
import Search from './../../assets/svg/Search';
import './Fields.css'
import Sort from './../../assets/svg/Sort';
import addField from '../../assets/png/buttonAddField.png'
import PolygonSideBarItem from '../PolygonSideBarItem/PolygonSideBarItem';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { fieldType } from './../../types/index';
import PolygonSideBarItemDefault from '../PolygonSideBarItem/PolygonSideBarItemDefault';
import { Geometry } from 'geojson';
const Fields = () => {
    const polygonName = useSelector((state: RootStateOrAny) => state.currentEditingPolygonName)
    const polygonGeo = useSelector((state: RootStateOrAny) => state.currentEditingPolygonGeo)

    const fields = useSelector((state: RootStateOrAny) => state.fields)
    const [polygon, setPolygon] = useState([polygonName, polygonGeo])

    const dispatch = useDispatch()

    const [canEditField, setCanEditField] = useState(useSelector((state: RootStateOrAny) => state.editingField))

    const polygonAddHandler = () => {
        if (!canEditField) {
            dispatch({ type: "SET_EDITING_POLYGON_TRUE" })
            setCanEditField(true)
        }
        else {
            if (polygonName && polygonGeo) {
                dispatch({
                    type: "ADD_FIELD", field: {
                        id: polygonGeo.id,
                        main_info: {
                            name: polygonName,
                            culture: 'Нет Культуры',
                            numbers: "0.03",
                            type: "Нет заражения",
                        },
                        geoJson: polygonGeo
                    }
                })
                dispatch({ type: "SET_EDITING_POLYGON_FALSE" })
                setCanEditField(false)
            }
        }
    }

    return (
        <div className='w-340px flex flex-col justify-between h-screen fields flex absolute z-10 left-0 text-white'>
            <div>
                <div className='flex justify-between m-6'>
                    <Edit />
                    <span className='font-HandelGothic'>Мои поля</span>
                    <Search />
                </div>
                <div className='flex justify-between mx-6'>
                    <select>
                        <option>Все категории</option>
                        <option>Категория 1</option>
                        <option>Категория 2</option>
                    </select>
                    <div className='my-auto'><Sort /></div>
                </div>
                <div>
                    {fields.map((x: fieldType) =>
                        <PolygonSideBarItem key={x.id} {...x} />)}
                    {canEditField ?
                        <PolygonSideBarItemDefault />
                        :
                        <></>
                    }
                </div>
            </div>
            <div>
                <button onClick={polygonAddHandler} className='flex flex-col font-HandelGothic mx-auto mb-3 relative'>
                    <img src={addField} alt="Добавить поле" />
                    <span className='relative w-200px text-black text-center bottom-8'>
                        {canEditField ? "Подтвердить" : "+ Добавить поле"}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Fields;