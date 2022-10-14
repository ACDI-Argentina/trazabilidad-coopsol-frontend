import { useEffect } from "react";
import { useState } from "react";

const Dots = ({ dots = 3, interval = 500 }) => {
  const [amount, setAmount] = useState(dots);
  useEffect(() => {
    let intervalId = setInterval(() => {
      setAmount(amount => {
        const n = ((amount + 1) % (dots + 1));
        if(n === 0 ) return 1;
        
        return n;
      })
    }, interval);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  let dotsStr = ".".repeat(amount);

  return (
    <span>{dotsStr}</span>
  )
};

export default Dots