import React from 'react';
import './styles.scss';

interface IProps {
  image: string;
}

const Slide: React.FC<IProps> = ({ image }) => (
  <div className="Slide">
    <section>
      <h1>Music Equipment</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus
        fuga harum necessitatibus repellendus provident cumque explicabo iusto
        consequatur architecto?
      </p>
      <button className="button">Shop Now</button>
    </section>
    <img src={image} alt="slide-image" />
  </div>
);

export default Slide;
