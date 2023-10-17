import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import { useState, useEffect } from "react";

function App() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Header dateTime={dateTime} />
      <List />
    </>
  );
}

export default App;
