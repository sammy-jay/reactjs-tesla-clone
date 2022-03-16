export const initialState = {
  isSideBarOpen: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_BAR":
      if (state.isSideBarOpen) {
        return { ...state, isSideBarOpen: false };
      }
      return { ...state, isSideBarOpen: true };
    default:
      return state;
  }
};
