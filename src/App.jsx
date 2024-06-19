import { useState } from 'react';
// import './App.css';
// import Colors from './components/colors';
import PasswordGen from './components/PasswordGen';

function App() {
  // const [color, setColor] = useState("olive");

  return (
      // <>
    //   {/* this is called fragment */}

    //   <h1 className='hover:text-red-600'>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //   </div>
    //   <Card username="Ehtsham khaliq" btnText="Click me"/>
    //     <Card username="Ehtsham Tariq" btnText="Visit me"/>
    // </>
    <div>
      {/* <Colors /> */}
      <PasswordGen />

    </div>
    
  );
}

export default App;
