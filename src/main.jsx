import { StrictMode, createContext, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { EventProvider } from "../src/Context/EventContext.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const backend_url = "https://rcsc-backend.onrender.com";

export const Context = createContext({});

const AppWrapper = () => {
  const [BACKEND_URL, setBACKEND_URL] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setBACKEND_URL(backend_url);
    setLoading(false);
  }, []); 

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <Context.Provider value={{ BACKEND_URL }}>
      {/* Mount ToastContainer early so it's available before child components try to call toast() */}
      <ToastContainer position="top-right" autoClose={3000} />
      <BrowserRouter>
          <EventProvider>  
            <App />
          </EventProvider>
      </BrowserRouter>
    </Context.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
