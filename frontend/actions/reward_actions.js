export const FETCH_REWARDS = "FETCH_REWARDS";
export const FETCH_REWARD = "FETCH_REWARD";
export const RECEIVE_ALL_REWARDS = "RECEIVE_ALL_REWARDS";
export const RECEIVE_REWARD = "RECEIVE_REWARD";
export const REMOVE_REWARD = "REMOVE_REWARD";
export const CREATE_REWARD = "CREATE_REWARD";
export const UPDATE_REWARD = "UPDATE_REWARD";
export const DELETE_REWARD = "DELETE_REWARD";

export const fetchRewards = () => ({
  type: FETCH_REWARDS
});

export const fetchReward = id => ({
  type: FETCH_REWARD,
  id
});

export const createReward = reward => ({
  type: CREATE_REWARD,
  reward
});

export const updateReward = reward => ({
  type: UPDATE_REWARD,
  reward
});

export const deleteReward = id => ({
  type: DELETE_REWARD,
  id
});

export const receiveAllRewards = rewards => ({
  type: RECEIVE_ALL_REWARDS,
  rewards
});

export const receiveReward = reward => ({
  type: RECEIVE_REWARD,
  reward
});

export const removeReward = reward => ({
  type: REMOVE_REWARD,
  reward
});
