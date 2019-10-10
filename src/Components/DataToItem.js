import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ItemCard";
import ParagraphCard from "./ParagraphCard";
import DateInput from "./DateInput";

export default function DataToItem() {
  const [imageData, setImageData] = useState([]);
  const [description, setDescription] = useState([]);
  const [date, setDate] = useState();

  const handleChange = e => {
    console.log(e.target.value);
    return setDate(e.target.value)
  }
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=BqJJddl5fvU1JifcpLrAeCijmhA3ETZnbBzDj1Cx&date=${date}`)
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
        <DateInput handleChange= {handleChange} date = {date}/>
    </div>
  );
}