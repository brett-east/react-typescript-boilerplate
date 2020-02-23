const initialState = {
  count: 0,
};

const set = (state: typeof initialState): typeof initialState => ({
  count: state.count + 1,
});

const reducer1 = (
  state = initialState,
  { type }: { type: string },
): typeof initialState => {
  switch (type) {
    case 'ADD_NUMBER': return set(state);
    default: return state;
  }
};

export default reducer1;
