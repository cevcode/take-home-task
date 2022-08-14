import { buildQueries, queryHelpers } from '@testing-library/react';

const getMultipleError = (c, dataTestValue) => (
  `Found multiple elements with the data-test attribute of: ${dataTestValue}`
);
const getMissingError = (c, dataTestValue) => (
  `Unable to find an element with the data-test attribute of: ${dataTestValue}`
);

const queryAllByAttribute = (_self, attribute, ...args) => {
  return queryHelpers.queryAllByAttribute(attribute, _self, ...args);
};

const [
  queryByAttribute,
  getAllByAttribute,
  getByAttribute,
  findAllByAttribute,
  findByAttribute,
] = buildQueries(queryAllByAttribute, getMultipleError, getMissingError);

export {
  queryByAttribute,
  getAllByAttribute,
  getByAttribute,
  queryAllByAttribute,
  findAllByAttribute,
  findByAttribute,
};
