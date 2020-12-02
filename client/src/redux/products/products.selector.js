import { createSelector } from 'reselect';

const selectProducts = state => state.products;

export const selectDirectorySelector = createSelector(
    [selectProducts],
    products => products.sections //sections используется в компоненте INITIAL STATE который мы задали
)