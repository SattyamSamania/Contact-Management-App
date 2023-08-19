import React, { useState, ChangeEvent, FormEvent } from 'react';

const CreateContactPage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState('active');

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Handle form submission (e.g., save contact to database)
    console.log('Submitted:', { firstName, lastName, status });
    // Reset form fields after submission
    setFirstName('');
    setLastName('');
    setStatus('active');
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Create New Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="status">
            Status
          </label>
          <select
            id="status"
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            value={status}
            onChange={handleStatusChange}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
        >
          Save
        </button>
        <button
          type="button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded"
          onClick={() => {
            setFirstName('');
            setLastName('');
            setStatus('active');
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreateContactPage;
