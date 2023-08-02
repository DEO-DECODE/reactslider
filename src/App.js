import "./App.css";
import { useEffect, useState } from "react";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.webp";
import img3 from "./assets/img3.webp";
import img4 from "./assets/img4.webp";
import img5 from "./assets/img5.jpeg";
function App() {
  const [index, setIndex] = useState(0);
  const mod = (n, m) => {
    let result = n % m;
    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  const cards = [
    {
      id: 0,
      image: img1,
    },
    {
      id: 1,
      image: img2,
    },
    {
      id: 2,
      image: img3,
    },
    {
      id: 3,
      image: img4,
    },
    {
      id: 4,
      image: img5,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
      // console.log(index);
    }, 3000);
  }, [index]);

  return (
    <div className="App">
      <div className="carousel">
        {cards.map((item) => {
          const indexLeft = mod(index - 1, cards.length);
          const indexRight = mod(index + 1, cards.length);

          let className = "card";
          // console.log("i - " + i);
          if (item.id === index) {
            className = "card card--active";
          } else if (item.id === indexRight) {
            className = "card card--right";
          } else if (item.id === indexLeft) {
            className = "card card--left";
          } else className = "card";

          return (
            <img
              key={item.id}
              className={className}
              src={item.image}
              alt="Comic"
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
