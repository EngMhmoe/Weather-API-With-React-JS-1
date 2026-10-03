import { configureStore } from "@reduxjs/toolkit";

import weatherApiSliceReducer from "../features/API/witherAPISlice";

export const store = configureStore({
    reducer: {
        weatherAPI: weatherApiSliceReducer,
    }
});