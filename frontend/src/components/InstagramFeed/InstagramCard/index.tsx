import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import './styles.scss';

interface IProps {
  image: string;
}

const InstagramCard: React.FC<IProps> = ({ image }) => (
  <div className="InstagramCard">
    <img src={image} alt="Instagram" />
    <section>
      <FaInstagram />
    </section>
  </div>
);

export default InstagramCard;
