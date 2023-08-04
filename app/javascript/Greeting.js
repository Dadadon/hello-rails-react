import React, { useEffect, useState } from 'react';
// import { useDispatch} from 'react-redux';
import axios from 'axios';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  // Remove the 'dispatch' variable if you don't use it in this component.
  // You can remove or comment out the following line if not needed.
  // const dispatch = useDispatch();

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
