import { expect, describe, test } from '@jest/globals'
import FluentSQLBuilder from '../src/fluentSQL';

const data = [
  {
    id: 0,
    name: 'Kathryn',
    category: 'developer'
  },
  {
    id: 1,
    name: 'Harold',
    category: 'developer'
  },
  {
    id: 2,
    name: 'Edwardo',
    category: 'manager'
  },
]
describe('Test suite for FluentSQL Builder', () => {
  test('#for should return a FluentSQLBuilder instance', () => {
    const result = FluentSQLBuilder.for(data);
    const expected = new FluentSQLBuilder({ database: data });
    expect(result).toStrictEqual(expected);
  });
  test('#build should return the empty object results', () => {
    const result = FluentSQLBuilder.for(data).build();
    const expected = [];
    expect(result).toStrictEqual(expected);
  });

  test.todo('#limit given a collection it should limit results');
  test.todo('#where given a collection it should filter data');
  test.todo('#select given a collection it should return only specific fields');
  test.todo('#orderBy given a collection it should order results by fields');

  test.todo('pipeline');
});