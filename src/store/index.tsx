import { createStore } from "redux";
import { mapReducer } from "./mapReducer";

export const store = createStore(mapReducer);