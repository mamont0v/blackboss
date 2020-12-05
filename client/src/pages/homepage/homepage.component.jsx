import React from 'react'
// import PropTypes from 'prop-types'
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import ProductsOverviewSection from './sections/products-overwiew/products-overview';


const HomePage = (props) => {
    return (
        <div>
            <div className='homepage'>
               {/* <Directory/> */}
               <ProductsOverviewSection/>
            </div>
        </div>
    )
}

// HomePage.propTypes = {

// }

export default HomePage

