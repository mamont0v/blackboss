import React from 'react'
// import PropTypes from 'prop-types'
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';


const HomePage = (props) => {
    return (
        <div>
            <div className='homepage'>
               <Directory/>
            </div>
        </div>
    )
}

// HomePage.propTypes = {

// }

export default HomePage

