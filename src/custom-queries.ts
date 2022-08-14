import {queryHelpers, buildQueries} from '@testing-library/react'

// query
const queryAllByData = (...args: any) =>
    // @ts-ignore
    queryHelpers.queryAllByAttribute('data-test', ...args);

const [
    queryByDataTest
    // @ts-ignore
] = buildQueries(queryAllByData);

export {
    queryByDataTest
}
