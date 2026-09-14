require("dotenv").config();
const cors = require("cors");
const express=require("express");
const app=express();
app.use(cors());
const PORT=3000;


app.get("/",(req,res)=>{
    res.send("Weather backend is running!");
});

app.get("/weather",async(req,res)=>{
    const city=req.query.city;
    const apiKey=process.env.WEATHER_API_KEY;

    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response=await fetch(url);
        
        if(!response.ok){
            return res.status(404).json({error:"City not found"});
        }
        const data=await response.json();
        res.json(data);
    }catch(error){
        res.status(500).json({error:"Something went wrong"})
    }
});



app.get("/forecast", async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.WEATHER_API_KEY;

  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(404).json({ error: "Forecast not found" });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/weather/coords", async (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  const apiKey = process.env.WEATHER_API_KEY;

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(404).json({ error: "Location not found" });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});





