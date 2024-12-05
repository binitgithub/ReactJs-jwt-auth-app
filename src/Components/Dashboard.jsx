import React from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  if (!token) {
    navigate('/login');
    return null;
  }

  const user = jwtDecode(token);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <p className="text-lg mt-4">Welcome, {user.email}</p>
      <p className="text-lg">Role: {user.role}</p>
      {user.role === 'admin' && (
        <div className="mt-6 p-4 bg-red-200 rounded">
          <h3 className="font-bold text-xl">Admin Panel</h3>
          <p>Only accessible to admins.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
