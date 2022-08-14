import React, { useEffect, useState } from "react";
import { useLocalStorage } from "./jsx/core/utils";
import { Toaster } from 'react-hot-toast';
import AppRouter from "./router";

function App() {
  return (<>
    <div className="page">
      <AppRouter />
    </div>
    <div><Toaster position="top-right"
      reverseOrder={false} /></div>

  </>
  );
}

export default App;
