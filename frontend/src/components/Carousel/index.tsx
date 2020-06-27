import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import slide01 from '../../assets/slide01.jpg';
import slide02 from '../../assets/slide02.jpg';
import slide03 from '../../assets/slide03.jpg';
import './styles.scss';

import Slide from './Slide';

const Carousel: React.FC = () => {
  let slideArr = [slide01, slide02, slide03];
  const [x, setX] = useState(0);

  function goLeft() {
    x === 0 ? setX(-100 * (slideArr.length - 1)) : setX(x + 100);
  }

  function goRight() {
    x === -100 * (slideArr.length - 1) ? setX(0) : setX(x - 100);
  }

  return (
    <div className="Carousel">
      {slideArr.map((item, index) => (
        <div
          key={index}
          className="Carousel-Slide"
          style={{ transform: `translateX(${x}%)` }}
        >
          <Slide image={item} />
        </div>
      ))}
      <button className="Carousel-BtnLeft" onClick={goLeft}>
        <FaChevronLeft color="white" size={50} />
      </button>
      <button className="Carousel-BtnRight" onClick={goRight}>
        <FaChevronRight color="white" size={50} />
      </button>
    </div>
  );
};

export default Carousel;
