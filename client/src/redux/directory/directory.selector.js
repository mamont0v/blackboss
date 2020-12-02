import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySelector = createSelector(
    [selectDirectory],
    directory => directory.sections //sections используется в компоненте INITIAL STATE который мы задали
)