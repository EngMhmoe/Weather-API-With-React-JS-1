//import reduxjs-toolkit
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import axios
import axios from "axios";





// initialState
const initialState = {
    weatherAPI: {},
    loading: false,
    errorMass: null,
};





// Create Async Thunk => fetch Weather API
export const fetchWeatherAPI = createAsyncThunk("weatherAPI/fetchWeatherAPI", async({changeNameCity = "Egypt"})=>{

    // Start Axios Request
    const response = await axios
      .get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: changeNameCity,
          appid: "ed428933e5cc85e43a00b8f2c296d78a",
          units: "metric",
          lang: "en",
        },
      })



        // Start Get Name City
        const nameCity = response.data.name;

        // Start Get Temp Value
        const tempValue = Math.round(response.data.main.temp);

        // Start Get Weather Icon
        const iconCode = response.data.weather[0].icon;

        // Start Get Description
        const nameDescription = response.data.weather[0].description;

        // Start Get Min AND Max
        const temp_min = Math.round(response.data.main.temp_min);
        const temp_max = Math.round(response.data.main.temp_max);

        // Start Get Date
        const dateValue = new Date(response.data.dt * 1000).toLocaleDateString(
          "en-EG",
          {
            weekday: "long",

            year: "numeric",

            month: "long",

            day: "numeric",
          },
        );



    return { NameCity: nameCity, TempValue: tempValue, IconTemp: iconCode, NameDescription: nameDescription, temp_min, temp_max, DateValue: dateValue}
});





// Create Slice => weather API
const weatherApiSlice = createSlice({
    name: "WeatherAPI-Slice",


    initialState: initialState,


    reducers: {

    },


    extraReducers: (Building)=>{
        
        Building.addCase(fetchWeatherAPI.pending, (currentState)=>{
            currentState.loading = true;
        });


        Building.addCase(fetchWeatherAPI.fulfilled, (currentState, action)=>{
            currentState.weatherAPI = action.payload;

            currentState.loading = false;
        });


        Building.addCase(fetchWeatherAPI.rejected, (currentState, action)=>{
            currentState.errorMass = action.error.message;

            currentState.loading = false;
        });
    }
});





export default weatherApiSlice.reducer;