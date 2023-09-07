import '../App.css'
import grid from '../images/Group 77.png'

function Hero(){
    return(
        <section className="hero">
            <img src={grid} className='grid'/>
            <h1 className="hero--intro">Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero
