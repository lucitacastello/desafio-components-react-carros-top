import './styles.css';

import carImg from '../../assets/car.png';


export default function Card() {
    return (

        <div className='ct-card'>
            <img src={carImg} alt="Carro" />

            <p>Lorem ipsum dolor</p>
        </div>
    );
}
