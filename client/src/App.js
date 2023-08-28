import React, { createContext, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import SearchExercises from './components/SearchExercises';
import Exercises from './components/Exercises';
import Nayacomponent from './components/Nayacomponent';
import "./assets/css/styles.css"
import Logout from "./components/Logout"

import { initialState, reducer } from './reducer/UseReducer'
// CONTEXT API


const UserContext = createContext()
// contextType = UserContext;

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/exercises" element={<Nayacomponent />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/logout" element={<Logout />} />

    </Routes>
  )
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

return (<>

  <UserContext.Provider value={{ state, dispatch }}>
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routing />
      <Footer />
    </Box>
  </UserContext.Provider>
</>)
};

export default App;
export { UserContext }
