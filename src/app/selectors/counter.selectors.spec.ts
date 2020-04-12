import { getCount } from './counter.selectors';

describe('Count Selectors', () => {
  it('should select the feature state', () => {
    expect(getCount.projector({ count: 2 })).toBe(2);
  });
});
