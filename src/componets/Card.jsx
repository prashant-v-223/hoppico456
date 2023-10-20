import React from 'react'
import { Link } from 'react-router-dom';

function Card({ item, index }) {
    const percentageOff = ((item.mrp - item.mrp / 5) / item.mrp) * 100;
    return (
        <a
            href={`/product-details/${item.md5_id}`}
            key={index}
            className="Cs7ycL TcKeCe  col-6"
            style={{
                textDecoration: "none",
                padding: "2px",
                margin: "auto",
            }}
        >
            <div className="_2enssu ">
                <div style={{ position: "relative", minHeight: 170, minWidth: 150 }}>
                    <div className="_3LXIRu">
                        <div className="_2GaeWJ" style={{ width: 170, height: 170 }}>
                            <img className="_2puWtW _3a3qyb" src={item.img1} />
                        </div>
                    </div>
                </div>
                <div className="_24B_AU _3SexMn">{item.name}</div>
                <div className="_24B_AU _1AQnZC">
                    - {percentageOff.toFixed(1)}% Off
                    <span className="mrp">₹{item.mrp}</span>
                </div>
                <div className="_24B_AU _1AQnZC">
                    <b className="selling-price">₹{item.mrp / 5}</b>
                </div>
                <div className="_3Nxu4r delivery-txt text-center">Free Delivery in Two Days</div>
            </div>
        </a>
    )
}

export default Card
