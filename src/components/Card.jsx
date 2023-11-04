/* eslint-disable react/prop-types */
import '../style.css'

export default function Card(props) {
    return (
        <div className="card">
            {props.openspots === 0 && <div className='card--badge'>SOLD OUT</div>}
            <img src={`${props.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.svg" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
