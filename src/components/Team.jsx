import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Abubakir from '../Assets/Abubakir Raimjonov.jpg'
import './Styles/Team.css'

function Team() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

  return (
    <>
    <center><h1>Bizning professional jamoamiz</h1></center>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="imgs">
                <div className="img">
                    <img
                        className="d-block w-10"
                        src={Abubakir}
                        alt="First slide"
                    />
                    <br />
                    <h2>Raimjonov Abubakir</h2>
                    <h3>Frontend Developer</h3>
                </div>   
                <div className="img">
                    <img
                        className="d-block w-10"
                        src={Abubakir}
                        alt="First slide"
                    />
                    <br />
                    <h2>Raimjonov Abubakir</h2>
                    <h3>Frontend Developer</h3>
                </div>   
                <div className="img">
                    <img
                        className="d-block w-10"
                        src={Abubakir}
                        alt="First slide"
                    />
                    <br />
                    <h2>Raimjonov Abubakir</h2>
                    <h3>Frontend Developer</h3>
                </div>   
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="imgs">
                <div className="img">
                    <img
                        className="d-block w-10"
                        src={Abubakir}
                        alt="First slide"
                    />
                    <br />
                    <h2>Raimjonov Abubakir</h2>
                    <h3>Frontend Developer</h3>
                </div>   
                <div className="img">
                    <img
                        className="d-block w-10"
                        src={Abubakir}
                        alt="First slide"
                    />
                    <br />
                    <h2>Raimjonov Abubakir</h2>
                    <h3>Frontend Developer</h3>
                </div>   
                <div className="img">
                    <img
                        className="d-block w-10"
                        src={Abubakir}
                        alt="First slide"
                    />
                    <br />
                    <h2>Raimjonov Abubakir</h2>
                    <h3>Frontend Developer</h3>
                </div>   
        </div>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Team;