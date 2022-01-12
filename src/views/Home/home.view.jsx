import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/signin');
  }, []);

  return <div>Hello home</div>;
};

export default HomePage;
