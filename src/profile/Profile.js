import React from 'react'


export default function Profile(props) {
    return (
        <div style={{fontFamily:'monospace', textAlign:'center', marginTop:'170px'}}>
            {props.children}
            <h3>Name: {props.name}</h3>
            <h3>Bio: {props.bio}</h3>
            <h3>Profession: {props.profession}</h3>
        </div>
    )
}


Profile.defaultProps = {
    name :'Nothing Added Yet',
    bio : 'Nothing Added Yet',
    profession :'Nothing Added Yet'
}