import React, { useState } from 'react';
import TeamForm from './components/Form'
import TeamMember from './components/TeamMember'
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: '',
      email: '',
      role: ''
  }
]);


const handleSubmit = event => {
  event.preventDefault();
  setTeamMembers({...teamMembers, [event.target.name]:event.target.value})
  setTeamMembers({name: '', email:'', role:'Front-End Engineer'})
  console.log(teamMembers)
}

const handleUpdate = event =>{
  event.preventDefault();
  setTeamMembers({...teamMembers, [event.target.name]: event.target.value});
  console.log(teamMembers)
}

  return (
    <div className="App">

      <TeamForm handleSubmit={handleSubmit} handleUpdate ={handleUpdate} teamMembers={teamMembers} setTeamMembers={setTeamMembers}/>

      <TeamMember teamMembers={teamMembers} />
    </div>
  );
}

export default App;
