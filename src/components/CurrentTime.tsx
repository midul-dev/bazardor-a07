"use client";

import { useEffect, useState } from "react";

export default function CurrentTime() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      setDate(
        new Date().toLocaleDateString("bn-BD", {
          dateStyle: "full",
          timeZone: "Asia/Dhaka",
        })
      );
    };

    updateDate();

    const interval = setInterval(updateDate, 60_000);

    return () => clearInterval(interval);
  }, []);

  return <span>{date}</span>;
}