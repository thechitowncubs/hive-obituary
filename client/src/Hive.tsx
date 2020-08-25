// Let's import React, our styles and React Async
import React from 'react';
import './App.css';
import Async from 'react-async';

// We'll request user data from this API
const loadUsers = () =>
  fetch("https://127.0.0.1:3001/users")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

// Our component
function App() {
  return (
    <div className="container">
      <Async promiseFn={loadUsers}>
        {({ data, err, isLoading }) => {
          if (isLoading) return "Loading..."
          if (err) return `Something went wrong: ${err.message}`

          if (data)
            return (
              <div>
                <div>
                  <h2>React Async - Random Users</h2>
                </div>
                {data.map(user=> (
                  <div key={user.blockID} className="row">
                  </div>
                ))}
              </div>
            )
        }}
      </Async>
    </div>
  );
}

export default App;