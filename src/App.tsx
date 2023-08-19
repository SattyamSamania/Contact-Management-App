import React from 'react';
import ContactPage from './components/ContactPage';
import CreateContact from './components/CreateContact';



const App: React.FC = () => {
  return (
    <>
    

{/* Header Section of the App */}
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 p-4">
        <h1 className="text-white text-2xl font-semibold text-center">
          Contact Management App
        </h1>
      </header>
      <main className="container mx-auto p-4">
        <ContactPage />
        {/* <CreateContact/> */}

        {/* This is the Footer Section of the App */}
      </main>
      <footer className="bg-blue-500 p-4 text-center">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Contact Management App
        </p>
      </footer>
    </div>
    </>
  );
};

export default App;
