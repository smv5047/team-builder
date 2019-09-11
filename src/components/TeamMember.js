import React from 'react';

function TeamMember(props) {

    return(
    <>
        <div >
            <h2>Michael Scott</h2>
            <h3>Michaelscarn@dundermifflin.com</h3>
            <h3>Front-End Engineer</h3>
        </div>  
        {/* {props.teamMembers && props.teamMembers.map((teamMember, index) => (
        <div key={index}>
            <h2>{teamMember.name}</h2>
            <h3>{teamMember.email}</h3>
            <h3>{teamMember.role}</h3>
        </div>   
        ))} */}
        <h1>{props.teamMembers.name}</h1>
    </>
    )
}


export default TeamMember;