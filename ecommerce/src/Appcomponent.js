import React from 'react';
import MyComponent1 from './components/Mycomponent1';
import MyComponent2 from './components/Mycomponent2';
import MyClassComponent1 from './components/MyClassComponent1';
import MyClassComponent2 from './components/MyClassComponent2';
export const App = () => {
  return (
    <div>
      <MyComponent1 />
      <MyComponent2 />
      <MyClassComponent1 />
      <MyClassComponent2/>
    </div>
  );
}

export default App;