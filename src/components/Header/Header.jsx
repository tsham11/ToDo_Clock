import "./header.css";
// import { useState, useEffect } from "react";

function Header({dateTime}) {
  // const [dateTime, setDateTime] = useState(new Date());

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDateTime(new Date());
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  const date = dateTime
    .toLocaleDateString([], {
      weekday: "short",
      day: "numeric",
    })
    .split(" ")
    .reverse()
    .join(" ");

  const clock = dateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="Header">
      <p id="date">{date}</p>
      <p>{clock}</p>
    </div>
  );
}

export default Header;
