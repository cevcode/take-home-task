import { render, queries, within, screen } from '@testing-library/react';
import * as queryByDataTest from './queryByDataTest';
import * as queryByAttribute from './queryByAttribute';
import * as querySelectOptionByDataTest from './querySelectOptionByDataTest';

const customRender = (ui, options) =>
  render(ui, {
    queries: {
      ...queries,
      ...queryByDataTest,
      ...queryByAttribute,
      ...querySelectOptionByDataTest,
    },
    ...options,
  });

const customWithin = (element) =>
  within(element, {
    ...queries,
    ...queryByDataTest,
    ...queryByAttribute,
    ...querySelectOptionByDataTest,
  });

const boundQueries = customWithin(document.body);

const customScreen = { ...screen, ...boundQueries };

/**
 * FUnction that ensure even loop oldest events are executed,
 * and consequently also the pending async ops
 *
 */
const flushPromises = () => new Promise((r) => setTimeout(r, 0));

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render, customWithin as within, customScreen as screen, flushPromises };
