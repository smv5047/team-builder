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

const initialTeamMember = {name: "Michael Scott", email: "michaelscarn@dundermifflin.com", role: "Front-End Engineer"}
const [newTeamMember, setNewTeamMember] = useState(initialTeamMember)


const handleSubmit = event => {
  event.preventDefault();
  setTeamMembers([ teamMembers, setTeamMembers])
  setTeamMembers({name: '', email:'', role:'Front-End Engineer'})
  console.log(teamMembers)
}

const handleUpdate = event =>{
  setNewTeamMember({...newTeamMember, [event.target.name]: event.target.value});
}

  return (
    <div className="App">

      <TeamForm handleSubmit={handleSubmit} handleUpdate ={handleUpdate} teamMembers={teamMembers} setTeamMembers={setTeamMembers} newTeamMember={newTeamMember} setNewTeamMember={setNewTeamMember}/>

      <TeamMember teamMembers={teamMembers} />
    </div>
  );
}

export default App;
