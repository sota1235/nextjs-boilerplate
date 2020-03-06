import { router } from './router';

describe('test for router', () => {
  it('should update state for RouterUpdateAction', () => {
    const expectedURL = 'expected.url';
    const expectedState = {
      url: expectedURL,
    };

    expect(
      router(
        {
          url: 'currentURL',
        },
        {
          type: 'ROUTER_UPDATE_ACTION',
          payload: {
            url: expectedURL,
          },
        },
      ),
    ).toEqual(expectedState);
  });

  it('should return current state for non target action', () => {
    const expectedState = {
      url: 'currentURL',
    };
    expect(
      router(expectedState, {
        type: 'ANY_ACTION',
      }),
    ).toEqual(expectedState);
  });
});
