import { get } from './componentsDictionary';

it('works', () => {
  const components = [{ id: 'a', type: 'filter' }, { id: 'b', type: 'filter' }];
  const inputs = components
    .map(c => ({ component: c.id, inputs: get(c.type).inputs }))
    .map(c => ({ inputs: c.inputs.map(i => ({ component: c.component, input: i })) }))
    .map(c => c.inputs)
    .reduce((a, b) => a.concat(b));
  expect(inputs).toEqual([{ component: 'a', input: 'self' }, { component: 'a', input: 'frequency' }, { component: 'b', input: 'self' }, { component: 'b', input: 'frequency' }]);
});
