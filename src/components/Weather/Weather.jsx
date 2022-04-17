import "./weather.css"
import {useState,useEffect} from "react"
import axios from "axios"

const Weather =()=> {
    const [input,setInput]=useState("")
    const [data,setData]=useState(null)
    const getWeather=async(city)=>{
        const API_KEY="7623cd85fb4fa6d6fdb7a176f9224786"

        try {
            const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
 
             

            if (response.status===200){
                console.log(response.data)
                setData(response.data)
                console.log("data ",data)
                 
            }

        } catch (error) {
            setData(null)
                
        }
    }
    
    
    useEffect(()=>{
        getWeather("tlemcen")

     
    },[])
    return(
        <div className="weather-card">
           <div className="search-bar">
                <input
                    type="text"
                    placeholder="city"
                    onChange={(event)=>{setInput(event.target.value)}}/>
           
                <div 
                    className="search-btn"
                    onClick={()=>{getWeather(input)}}>
                    Search
                </div>
           </div>
            <img 
                src="https://th.bing.com/th/id/R.0e7aa08be8134a1b01de47ecee494426?rik=grjtHjCPv0H2Lw&pid=ImgRaw&r=0&sres=1&sresct=1" 
                alt="weather" 
                height="150" 
                width="150"/>
{data? ( 
    <>
        <div className="city" >
            {data.name}
        </div>
        <div className="weather-info">
            <div className="row">
                <div className="info-title">Temperature</div>
                <div className="info-title">Weather</div>
                <div className="info-title">Wind</div>
            </div>
            <div className="row">
                <div className="info">{ Math.round(data.main.temp-273.15)}</div>
                <div className="info">{data.weather[0].main}</div>
                <div className="info">{data.wind.speed} km/h</div>
            </div>
        </div>
  </>  
):("no data display")}
            
        </div>

    )
}

export default Weather

