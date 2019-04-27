import { toYear } from './omdbHelpers';

it('converts to year', () => {
    expect( toYear('2017')).toEqual(2017);
});
