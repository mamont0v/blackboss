import { createSelector } from 'reselect';


const selectNav = (state) => state.nav;


// export const selectNavItems = createSelector(
//     [selectNav],
//     (bag) => bag.bagItems
// );

export const selectNavHidden = createSelector(
    [selectNav],
    (nav) => nav.isHidden
)