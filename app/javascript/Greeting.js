import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/api/random_greeting').then((response) => {
      setGreeting(response.data.message);
    });
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;
