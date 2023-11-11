import React from 'react'
import { useAuth } from '../context/AuthContext'

function SeeUser() {

    const {user} = useAuth()

  return (
    <div>
        {
            user ? (
                <>
                    <p></p>
                    <p>{user.nombre}</p>
                    <p>{user.apellido}</p>
                    <p>{user.rol}</p>
                    <p></p>
                </>
            ) : null
        }
    </div>
  )
}

export default SeeUser
