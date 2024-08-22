import React from 'react'
import "./Dashboard.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Dashboard = () => {
  return (
    <div className='dashboard-container'> 
      <h1>Welcome To Dashboard</h1>
      <h5>Here You can manage your business ♥</h5>
      <div>
        <Link to="/create-product">Create Product</Link>
        <Link to="/manage-products">Manage Products</Link>
      </div>
    </div>
  )
}

export default Dashboard