
/*
 * action types
 */

export const EXAMPLE_ACTION = 'EXAMPLE_ACTION'

/*
 * action creators
 */

export function exampleAction(payload) {
    return { type: EXAMPLE_ACTION, payload }
};
