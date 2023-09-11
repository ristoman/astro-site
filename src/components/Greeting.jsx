import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  
  const [greeting, setGreeting] = useState(randomMessage);

  return (
    <div> 
      <h3>{greeting}! Welcome to my corner of the Internet!</h3>
      {/* <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button> */}
    </div>
  );
}