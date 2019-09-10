import React, { useState }from 'react';
import './App.css';

function App() {
const [teamMembers, updateTeamMembers] = useState({
  firstname: 'Michael',
  lastname: 'Scott'
})

  return (
    <div className="App">
      <div>
        First Name: {teamMembers.firstname}
        Last Name: {teamMembers.lastname}
      </div>
    </div>
  );
}

export default App;
