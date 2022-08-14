import { queryHelpers, buildQueries, fireEvent } from '@testing-library/react'

// The queryAllSelectOptionByDataTest is a shortcut for attribute-based matchers
// You can also use document.querySelector or a combination of existing
// testing library utilities to find matching nodes for your query
const queryAllSelectOptionByDataTest = async (container, selectTag, optionTag, options) => {
  const selects = queryHelpers.queryAllByAttribute('data-test', container, selectTag, options);
  if (selects.length > 1) return new Error('[queryAllSelectOptionByDataTest] Cannot query for multiple select options.');
  if (select.length == 0) {
    return [];
  }

  const select = selects[0];
  await fireEvent.click(select);
  
  const selectOptions = queryHelpers.queryAllByAttribute('data-test', container, optionTag, options);
  return selectOptions;
};

const getMultipleError = (c, dataTestValue, otherVal) =>
  `Found multiple elements with the data-test attribute for one of: [${dataTestValue}, ${otherVal}]`
const getMissingError = (c, dataTestValue, otherVal) =>
  `Unable to find an element with the data-test attribute for one of: [${dataTestValue}, ${otherVal}]`

const [
  querySelectOptionByDataTest,
  getSelectOptionByDataTest,
  findSelectOptionByDataTest,
] = buildQueries(queryAllSelectOptionByDataTest, getMultipleError, getMissingError)

export {
  querySelectOptionByDataTest,
  getSelectOptionByDataTest,
  findSelectOptionByDataTest,
}
