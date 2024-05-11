import React from 'react'
import { Link } from 'react-router-dom'

export const DashboardPage = () => {
  return (
    <div className='card'>
    <h1>DashboardPage</h1>

    <div>

    <Link to="/ajustes" className="btn btn-primary">Ajustes</Link>

    <Link to="/subirImagenes" className="btn btn-primary">Subir</Link>

    <Link to="/perfil" className="btn btn-primary">Ver perfil</Link>

    </div>
    </div>
    
  )
}

export default DashboardPage