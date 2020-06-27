import React from 'react';
import './styles.scss';

interface IProps {
  children: React.ReactNode;
  text: string;
}

const GuaranteeCard: React.FC<IProps> = ({ children, text }) => (
  <div className="GuaranteeCard">
    {children}
    <h2>{text}</h2>
  </div>
);

export default GuaranteeCard;
