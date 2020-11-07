

const INITIAL_STATE = {
    sections: [
        {
            id: 1,
            title: 'на голову',
            imageUrl: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=648&q=80',
            linkUrl: 'shop/hats'   
        },
        {
            id: 2,
            title: 'на тело',
            imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
            linkUrl: 'shop/jackets'   
        },
        {
            id: 3,
            title: 'на ноги',
            imageUrl: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
            linkUrl: 'shop/sneakers'   

        },
        {
            id: 4,
            title: 'женщинам',
            imageUrl: 'https://images.unsplash.com/photo-1570258028946-b9a55411d117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            size: 'large',
            linkUrl: 'shop/womens'   
        },
        {
            id: 5,
            title: 'мужчинам',
            imageUrl: 'https://images.unsplash.com/photo-1549322360-51456e32c696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
            size: 'large',
            linkUrl: 'shop/mens'   
        },
    ]
};


const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


export default directoryReducer