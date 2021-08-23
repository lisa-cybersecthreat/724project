import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DataProvider } from './contexts/dataContext';
import { InitProvider } from './contexts/initContext';
import reportWebVitals from './reportWebVitals';
import "./i18n";
import { FunctionProvider } from './contexts/functionContext';

ReactDOM.render(
  <React.StrictMode>
    <InitProvider>
      <DataProvider>
        <FunctionProvider>
          <Suspense fallback={<h1>Loading profile...</h1>}>
            <App />
          </Suspense>          
        </FunctionProvider>
      </DataProvider>
    </InitProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
