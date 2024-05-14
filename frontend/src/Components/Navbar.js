import { Link } from "react-router-dom"

const Navbar=()=>{
    return(
        <>
            <div className='Hox-Nav2'>
                <div className='Hox-Nav2-L'>
                    <p>MERN</p>
                    {/* <img src={sample_img1}/> */}
                </div>
                <div className='Hox-Nav2-C'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/Hox"}>Hox</Link>
                    <Link>Services</Link>
                    <Link>Contact</Link>
                </div>
                <div>
                    <button className='Hox-Button1'>Click Me</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;