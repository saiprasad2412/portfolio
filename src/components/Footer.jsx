import React from 'react'

const Footer = () => {
  return (
    <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgb(16 13 37)' ,
        color:'violet'
    }}>
        <p style={{
            margin:'1rem'
        }}>&copy; Saiprasad Mane {new Date().getFullYear() }</p>
    </div>
  )
}

export default Footer