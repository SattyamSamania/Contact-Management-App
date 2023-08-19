import React from 'react';
import Sidebar from './Sidebar';
import ContactDetails from './ContactDetails';
import CreateContact from './CreateContact'

import { useNavigate } from 'react-router-dom';


const ContactPage: React.FC = () => {


  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Contacts</h1>
          <button  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
         Create Contact
          </button>
         
        </div>
        <ContactDetails />
      </div>
    </div>
  );
};

export default ContactPage;
