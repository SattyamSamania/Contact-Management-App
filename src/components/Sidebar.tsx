import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/4 bg-white border-r p-4">
      <nav>
        <ul className="space-y-2">
          <li className="py-1 border-b border-gray-200">
            <a href="ContactDetails" className="text-blue-500 hover:text-blue-700">
              Contacts
            </a>
          </li>
          <li className="py-1 border-b border-gray-200">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Charts
            </a>
          </li>
          <li className="py-1 border-b border-gray-200">
            <a href="MapsSection" className="text-blue-500 hover:text-blue-700">
              Maps
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
