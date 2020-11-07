import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySelector } from '../../redux/directory/directory.selector';
import { connect } from 'react-redux';

const Directory = ({ sections }) => {
    return (
        <div className='directory-menu' >
            {sections.map(({ id, ...otherProps }) => (
                <MenuItem key={id} {...otherProps} />
            ))}
        </div>

    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySelector
})

export default connect(mapStateToProps)(Directory)