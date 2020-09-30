import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { LoginForm } from '@webtv/ui';

const App: React.FC = () => {
  return (
    <div>
      APP
      <LoginForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
