export const FETCH_REWARDINGS = "FETCH_REWARDINGS";
export const FETCH_REWARDING = "FETCH_REWARDING";
export const RECEIVE_ALL_REWARDINGS = "RECEIVE_ALL_REWARDINGS";
export const RECEIVE_REWARDING = "RECEIVE_REWARDING";
export const REMOVE_REWARDING = "REMOVE_REWARDING";
export const CREATE_REWARDING = "CREATE_REWARDING";
export const UPDATE_REWARDING = "UPDATE_REWARDING";
export const DELETE_REWARDING = "DELETE_REWARDING";

export const fetchRewardings = () => ({
  type: FETCH_REWARDINGS
});

export const fetchRewarding = id => ({
  type: FETCH_REWARDING,
  id
});

export const createRewarding = rewarding => ({
  type: CREATE_REWARDING,
  rewarding
});


export const updateRewarding = rewarding => ({
  type: UPDATE_REWARDING,
  rewarding
});

export const deleteRewarding = id => ({
  type: DELETE_REWARDING,
  id
});

export const receiveAllRewardings = rewardings => ({
  type: RECEIVE_ALL_REWARDINGS,
  rewardings
});

export const receiveRewarding = rewarding => ({
  type: RECEIVE_REWARDING,
  rewarding
});


export const removeRewarding = rewarding => ({
  type: REMOVE_REWARDING,
  rewarding
});
