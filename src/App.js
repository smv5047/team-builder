import React, { useState } from 'react';
import TeamForm from './components/Form'
import './App.css';

function App() {
const [teamMembers, setTeamMembers] = useState({
  name: '',
  email: '',
  role: '',
})

const handleSubmit = event => {
  event.preventDefault();
  setTeamMembers({name: '', email:'', role:'Front-End Engineer'})
  console.log(teamMembers)
}

const handleUpdate = event =>{
  setTeamMembers({...teamMembers, [event.target.name]: event.target.value});
}

  return (
    <div className="App">
      <TeamForm handleSubmit={handleSubmit} handleUpdate ={handleUpdate} teamMembers={teamMembers} setTeamMembers={setTeamMembers}/>
    </div>

  );
}

export default App;
