const defaultState = {
    fields: new Array(),
    currentEditingPolygonName: '',
    currentEditingPolygonGeo: {},
    editingField: false,
    lineMode: false
}

export const mapReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case "SET_POLYGON_NAME": {
            return { ...state, currentEditingPolygonName: action.name }
        }
        case "SET_POLYGON_GEO": {
            return { ...state, currentEditingPolygonGeo: action.geoJson }
        }
        case "SET_EDITING_POLYGON_TRUE": {
            return { ...state, editingPolygon: true }
        }
        case "SET_EDITING_POLYGON_FALSE": {
            return { ...state, editingPolygon: false }
        }
        case "SET_LINE_MODE_TRUE": {
            return { ...state, lineMode: true }
        }
        case "SET_LINE_MODE_FALSE": {
            return { ...state, lineMode: false }
        }
        case "ADD_FIELD": {
            return {...state, fields: [...state.fields, action.field]}
        }

        default:
            return state
    }
};
