import { GeoJsonProperties, Geometry } from 'geojson';
export interface geoJson{
    type: string,
    properties: GeoJsonProperties,
    geometry: Geometry
}

export interface fieldType{
    id: number,
    main_info:{
        name: string,
        culture: string,
        numbers: string,
        img?: HTMLElement,
        type: string,
    }
    geoJson: geoJson
}