import React, { MutableRefObject, RefObject, useEffect, useRef, useState, LegacyRef } from 'react';
import { accessToken, API_KEY_OPENWEATHERMAP } from '../../config/token';
import mapboxgl, { MapBoxZoomEvent } from 'mapbox-gl';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import ControlPanel from './../ControlPanel/ControlPanel';
import DataAndWeather from './../DataAndWeather/DataAndWeather';
import { getDistance } from 'geolib';
mapboxgl.accessToken = accessToken

const draw = new MapboxDraw({
    controls: {
        polygon: false,
        point: false,
        line_string: false,
        combine_features: false,
        uncombine_features: false,
        trash: false,
    }
});

const Map = () => {

    const mapContainer = useRef(null)
    const [map, setMap] = useState<mapboxgl.Map>()

    const canEditPolygon = useSelector((state: RootStateOrAny) => state.editingPolygon)
    const dispatch = useDispatch()
    const [center, setCenter] = useState<[number, number]>([37.762155532836914, 55.788349856956444])
    const lineMode = useSelector((state: RootStateOrAny) => state.lineMode)
    const [lineDistance, setLineDistance] = useState(0)

    const [zoom, setZoom] = useState(10)
    useEffect(() => {
        if (mapContainer.current === undefined) return;
        const mapboxMap = new mapboxgl.Map({
            container: mapContainer.current || '',
            style: 'mapbox://styles/mapbox/dark-v10',
            center: center,
            zoom: zoom
        })
        mapboxMap.addControl(draw, 'top-right')
        setMap(mapboxMap)
        mapboxMap.on("draw.create", function (e) {
            let coords = e.features[0].geometry;
            if (coords.type === 'LineString') {

                let sum = 0;
                for (let i = 1; i < coords.coordinates.length; i++)
                    sum += getDistance(coords.coordinates[i - 1], coords.coordinates[i])

                setLineDistance(sum)
                console.log(sum)
                dispatch({ type: 'SET_LINE_MODE_FALSE' })
            }
            else dispatch({ type: "SET_POLYGON_GEO", geoJson: e.features[0] })
        })
        mapboxMap.on('dragend', function (e) {
            let tempCenter = mapboxMap.getCenter()
            setCenter([tempCenter.lat, tempCenter.lat])
        })
        mapboxMap.on('zoomend', function (e) {
            let tempCenter = mapboxMap.getCenter()
            setCenter([tempCenter.lat, tempCenter.lat])
        })
    }, [])

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${center[1]}&lon=${center[0]}&appid=${API_KEY_OPENWEATHERMAP}`)
            .then((res) => res.json())
            .then((res) => setCurrentWeather(res))
    }, [center])

    useEffect(() => {
        if (!lineMode) {
            if (canEditPolygon) {
                draw.changeMode('draw_polygon')
            }
            else draw.changeMode('simple_select')
        }
    }, [canEditPolygon])

    useEffect(() => {
        map?.zoomTo(zoom)
        let tempCenter = map?.getCenter()
        if (tempCenter) setCenter([tempCenter.lat, tempCenter.lat])
    }, [zoom])

    useEffect(() => {
        if (!canEditPolygon) {
            if (lineMode) {
                draw.changeMode('draw_line_string')
            }
            else {
                draw.changeMode('simple_select')
            }
        }
    }, [lineMode])

    const [currentWeather, setCurrentWeather] = useState({ main: { temp: 1 }, weather: [{ main: '', icon: '' }] })

    return (
        <div className='w-screen h-screen relative'>
            <div className='absolute z-30 right-10 top-1/2 -translate-y-1/2'>
                <ControlPanel lineDistance={lineDistance} zoom={zoom} setZoom={setZoom} />
            </div>
            <div className='absolute z-30 right-10 bottom-10'>
                <DataAndWeather
                    temp={currentWeather.main.temp}
                    currentWeather={currentWeather.weather[0].main}
                    icon={currentWeather.weather[0].icon} />
            </div>
            <div ref={mapContainer} className='w-full h-full'>
            </div>
        </div >
    );
};

export default Map;