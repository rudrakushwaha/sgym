// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react'

// import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
// import HeroBanner from '../components/HeroBanner';
import { useNavigate } from "react-router-dom"

const Nayacomponent = () => {


  const navigate = useNavigate()
  const [userData, setUserData] = useState({})

  const callExercisesPage = async () => {
    try {
      const res = await fetch('/exercises', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })
      const data = await res.json()
      // console.log(data)
      setUserData(data)


      if (!res.status === 200) {
        const error = new Error(res.error)
        throw error;
      }

    } catch (err) {
      console.log(err)
      navigate("/login")
    }
  }







  useEffect(() => {
    callExercisesPage();
  }, [])

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');


  return (

    <div>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </div>

  )
}

export default Nayacomponent