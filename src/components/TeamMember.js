import React from 'react';

function TeamMember(props) {

    return(
    <>
        {props.teamMembers.map((teamMember, index) => (
        <div key={index}>
            <h2>{teamMember.name}</h2>
            <h3>{teamMember.email}</h3>
            <h3>{teamMember.role}</h3>
        </div>  
        ))}
    </>
    )
}


export default TeamMember;