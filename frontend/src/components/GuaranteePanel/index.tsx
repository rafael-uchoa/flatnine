import React from 'react';
import { FaTruckMoving, FaGift, FaMoneyBillWave } from 'react-icons/fa';
import './styles.scss';

import GuaranteeCard from './GuaranteeCard';

const GuaranteePanel: React.FC = () => (
  <div className="GuaranteePanel">
    <GuaranteeCard text="Free Shipping Everywhere">
      <FaTruckMoving size={50} />
    </GuaranteeCard>
    <GuaranteeCard text="On Sale Up To 50%">
      <FaGift size={50} />
    </GuaranteeCard>
    <GuaranteeCard text="Money Back Guarantee">
      <FaMoneyBillWave size={50} />
    </GuaranteeCard>
  </div>
);

export default GuaranteePanel;
