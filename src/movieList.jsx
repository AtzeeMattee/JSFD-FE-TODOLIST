import { useEffect, useState } from "react";

const MovieList = () => {
   const [data, setData]= useState([]);

   const getData = async() => {
        try {
            const resp = await fetch ('http://api.sampleapis.com(movies/animation');
            const json = await resp.json();
            console.log(json)
            setData(json);
        } catch (error) {
            setData(error.message);
        }   
    }
useEffect(() => {
    getData();
    const myFunction = (e) => {
        console.log('resize', e);
    }
    window.eddEventListener('resize', myFunction)
})
}