import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { registerLicense } from '@syncfusion/ej2-base'
import ContextWrapper from './components/calender/context/ContextWrapper'

registerLicense('Mgo+DSMBaFt+QHFqVk9rWU5Fc0BAXWFKblF8RGJTfllgBShNYlxTR3ZbQ1hiSXtTdExrUX9X;Mgo+DSMBPh8sVXJ1S0d+X1hPc0BDWHxLflF1VWFTfl96dVJWESFaRnZdQV1nSHtSdkBjW3ZWeXBc;ORg4AjUWIQA/Gnt2VFhhQlJNfVpdXGZWfFN0RnNbdV9xflRBcC0sT3RfQF5jTX9Wd0VmWX1XeXRSTw==;MTczNDIzMEAzMjMxMmUzMTJlMzMzOVc1UG5XK2s1WUZaWndjZVpNZlBYb1hQRE1yYzNqL091MjVmSGhvWVpkWUk9;MTczNDIzMUAzMjMxMmUzMTJlMzMzOVRPTmw2WmtqMkk5elh6TFpla1U3N3F2dnEwME14TDJIVHptaXBrczNzN3c9;NRAiBiAaIQQuGjN/V0d+XU9Hf1RHQmJMYVF2R2BJfVRxdV9HZ0wgOX1dQl9gSXpSc0RjXH9ceX1TQWk=;MTczNDIzM0AzMjMxMmUzMTJlMzMzOWd1L3JmT3d0TWxwQ2p0RGU3ckduRVZUcHRONytqakE1N0xGdzNhU2oxNmM9;MTczNDIzNEAzMjMxMmUzMTJlMzMzOW4wUzNia2FhVGx5bkJMWEJOS3EwdTduaWI5UUlPQkhVckFtYm1UNGlQTG89;Mgo+DSMBMAY9C3t2VFhhQlJNfVpdXGZWfFN0RnNbdV9xflRBcC0sT3RfQF5jTX9Wd0VmWXxecHdWTg==;MTczNDIzNkAzMjMxMmUzMTJlMzMzOVpaUUVmMkNBWW56UTBGL2F3M0RnWnpROEpPS0lLK1FJUStrUW1WWE9HMjg9;MTczNDIzN0AzMjMxMmUzMTJlMzMzOWk2cG0wbEFUZXJPbklCaXVSeERHU3paYjBrUzhDRTRWZVJQeUk2ZVBLRUU9;MTczNDIzOEAzMjMxMmUzMTJlMzMzOWd1L3JmT3d0TWxwQ2p0RGU3ckduRVZUcHRONytqakE1N0xGdzNhU2oxNmM9')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </BrowserRouter>
);