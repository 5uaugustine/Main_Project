import React from 'react';
import './App.css';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About';
import Index from './Components/Index';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Testimonail from './Components/Testimonail';
import Service from './Components/Service';
import Organic_fer from './Components/Organic_fer';
import Liquidfer from './Components/Liquidfer';
import Slow_release_fer from './Components/Slow_release_fer';
import AdminPanel from './Components/AdminPanel';
import CropManagement from './Components/CropManagement';
import FertilizerManagement from './Components/FertilizerManagement';
import RulesManagement from './Components/RulesManagement';
import UserManagement from './Components/UserManagement';
import LearnMore from './Components/LearnMore';
import Messages from './Components/Messages';



// Router Setup
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />  // Default login path
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/index',
    element: <Index />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/testimonail',
    element: <Testimonail />
  },
  {
    path: '/service',
    element: <Service />
  },
  {
    path: '/organic_fer',
    element: <Organic_fer />
  },
  {
    path: '/liquidfer',
    element: <Liquidfer />
  },
  {
    path: '/slow_release_fer',
    element: <Slow_release_fer />
  },
  {
    path: '/adminpanel',
    element: <AdminPanel />
  },
  {
    path: '/crop-management',
    element: <CropManagement />
  },
  {
    path: '/learnmore',
    element: <LearnMore />
  },
  {
    path: '/fertilizer-management',
    element: <FertilizerManagement />
  },
  {
    path: '/rules-management',
    element: <RulesManagement />
  },
  {
    path: '/user-management',
    element: <UserManagement />
  },
  {
    path: '/message',
    element: <Messages />
  }
]);

// Main App Component
function App() {
  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
