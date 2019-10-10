import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ItemCard";
import ParagraphCard from "./ParagraphCard";
import DateInput from "./DateInput";
import moment from "moment";

export default function DataToItem() {
  const todaysDate = new Date();
  const formatedDate = moment(todaysDate).format('YYYY-MM-DD')
  const [imageData, setImageData] = useState([]);
  const [description, setDescription] = useState([]);
  const [date, setDate] = useState(formatedDate);
  

  const handleChange = e => {
    console.log(e.target.value);
    return setDate(e.target.value)
  }
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then(response => {
        setImageData(response.data);
        setDescription(response.data.explanation)
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, [date]);
  return (
    <div className="container">
        <ImageCard image = {imageData.hdurl} title= {imageData.title}/>
        <ParagraphCard description = {description}/>
        <DateInput handleChange= {handleChange} date = {date} formatedDate = {formatedDate}/>
    </div>
  );
}