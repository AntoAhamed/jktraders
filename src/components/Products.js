import React from 'react'
import p1 from '../assets/IMG-20240829-WA0003.jpg'
import p2 from '../assets/IMG-20240829-WA0005.jpg'
import p3 from '../assets/IMG-20240829-WA0006.jpg'
import p4 from '../assets/IMG-20240829-WA0007.jpg'
import p5 from '../assets/IMG-20240829-WA0008.jpg'
import p6 from '../assets/IMG-20240829-WA0009.jpg'
import p7 from '../assets/IMG-20240829-WA0010.jpg'
import p8 from '../assets/IMG-20240829-WA0011.jpg'
import p9 from '../assets/IMG-20240829-WA0012.jpg'

function Products() {
    const images = [p1, p2, p3, p4, p5, p8]

    return (
        <div className='products'>
            <div className='products-header'>
                <h1>Our Products</h1>
            </div>
            <div className='products-items'>
                {images.map((image, index) => {
                    return (
                        <img src={image} alt='Items' key={index} />
                    )
                })}
            </div>
            <div className='products-items-details'>
                <div>
                    <img src={p1} alt='' />
                    <div>
                        <p>MODEL BF-150</p>
                        <p>Operating way  : Acton</p>
                        <p>Power supply  : Press the ignition button</p>
                        <p>Weight(epty)  : 8.50 KG</p>
                        <p>Gasoline tank capa : 1.48</p>
                        <p>Gasoline Consumption : 1.8 lit</p>
                        <p>Chemical tank : 6.5 lit</p>
                        <p>Solution output : 40 lit/hr</p>
                        <p>Solution tank  : Stainless teel 316L</p>
                        <p>Category: Fogger</p>
                        <p>Tags: Best Fogger BF-150, Sprayer</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>KBC-4400</p>
                        <p>Displacement : 40cc</p>
                        <p>Max output/rpm : 2.0ps/7000rpm</p>
                        <p>Fuel tank capacity : 0.9 liter</p>
                        <p>Handle/lever type : Loop handle/Throttle lever</p>
                        <p>Transmission type/tube diameter : Flexible/26mm</p>
                        <p>Weight : 10.4kg</p>
                    </div>
                    <img src={p2} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Products
