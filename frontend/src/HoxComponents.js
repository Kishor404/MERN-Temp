import './Styles/Components.css';
import { Link } from 'react-router-dom';

import sample_img1 from "./assets/sample_img1.jpg"

// HOX
import './Styles/Hox.css'


const HoxComponents=()=>{
    return(
        <>
            <h3>HOX</h3>
            <section className='Compo-Hox-But'>
                <h5>BUTTONS</h5>
                <div className='Compo-Button-div'>
                    <p>Hox Button 1</p>
                    <button className="Hox-Button1">Click Me !</button>
                </div>
                <div className='Compo-Button-div'>
                    <p>Hox Button 2</p>
                    <button className="Hox-Button2">Click Me !</button>
                </div>
                <div className='Compo-Button-div'>
                    <p>Hox Button 3</p>
                    <button className="Hox-Button3">Click Me !</button>
                </div>
                <div className='Compo-Button-div'>
                    <p>Hox Button 4</p>
                    <button className="Hox-Button4">Click Me !</button>
                </div>
                <div className='Compo-Button-div'>
                    <p>Hox Button 5</p>
                    <button className="Hox-Button5">Click Me !</button>
                </div>
            </section>
            <section className='Compo-Hox-Card'>
                <div className='Hox-Card1'>
                    <img src={sample_img1} alt='Sample Img'/>
                    <p>Hox-Card1</p>
                    <Link to={"/"} className='Hox-Card1-Link'> </Link>
                </div>
                <Link className='Hox-Card2'>
                    <p>Hox-Card2</p>
                </Link>
                <div className='Hox-Card3'>
                    <Link className='Hox-Card3-in'>
                        <p>Hox-Card3</p>
                    </Link>
                </div>
                <Link className='Hox-Card4'>
                    <p>Hox-Card4</p>
                </Link>
            </section>
            
        </>
    )
}

export default HoxComponents;