import React from 'react';
import Authorization from './pages/Authorization';
import Main from './pages/Main';

function App() {

  const [authorized, setAuthorized] = React.useState<boolean>(true)

  return (
    <div>
      {authorized ?
        <Authorization setAuthorized={setAuthorized} />
        :
        <Main />
      }
    </div>
  );
}

export default App;
