import React from 'react';
import Header from './components/Header'; // Import the Header component
import CarList from './components/CarList';






const App = () => {
  return (
    <div>
      <Header />  {/* Use the imported Header component */}
       <CarList />
    </div>
  );
};

export default App;
