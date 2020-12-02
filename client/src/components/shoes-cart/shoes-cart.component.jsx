import React from 'react'
import './shoes-cart.styles.scss'

const ShoesCart = () => {
    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="imgBx">
                        <img src={require('../../../../images/ClipartKey_1747370.png')} alt="adidas-1" />
                    </div>
                    <div className="contentBx">
                        <h2>Adidas Shoes</h2>
                        <div className="size">
                            <h3>Size: </h3>
                            <span>41</span>
                            <span>42</span>
                            <span>43</span>
                            <span>44</span>
                        </div>
                        <div className="color">
                            <h3>Color: </h3>
                            <span>41</span>
                            <span>42</span>
                            <span>43</span>
                            <span>44</span>
                        </div>
                        <a href="#">Buy nows</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoesCart