import React from 'react';
import about from '../../assets/about.jpg';
import './styles.scss';

import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const About: React.FC = () => (
  <div className="About">
    <Topbar />
    <Navbar />
    <header>
      <img src={about} alt="About" />
    </header>
    <h2>Our History</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus,
      officia ad. Blanditiis laudantium ducimus voluptas, in expedita velit
      obcaecati nesciunt qui reprehenderit cumque eligendi, tempora placeat
      perspiciatis rerum, numquam quam quo quae inventore aut totam a sint?
      Minus quisquam iusto possimus aliquid laborum porro esse provident
      reprehenderit ut deserunt? Mollitia.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo, harum
      totam explicabo voluptate aperiam cum fuga veritatis nemo rem quibusdam,
      asperiores reprehenderit adipisci, vitae doloremque repellendus architecto
      dolorem expedita.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
      delectus reprehenderit excepturi. At numquam animi repellendus, error
      asperiores, suscipit culpa mollitia nesciunt rem officia iure vel nostrum
      quia quibusdam? Consequuntur voluptate sint corporis laudantium tempore
      nesciunt earum neque id deleniti?
    </p>
    <Footer />
  </div>
);

export default About;
