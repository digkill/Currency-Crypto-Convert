import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Provider} from 'mobx-react';

import stores from './stores';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);