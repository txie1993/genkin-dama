export const FETCH_BACKINGS = "FETCH_BACKINGS";
export const FETCH_BACKING = "FETCH_BACKING";
export const RECEIVE_ALL_BACKINGS = "RECEIVE_ALL_BACKINGS";
export const RECEIVE_BACKING = "RECEIVE_BACKING";
export const REMOVE_BACKING = "REMOVE_BACKING";
export const CREATE_BACKING = "CREATE_BACKING";
export const UPDATE_BACKING = "UPDATE_BACKING";
export const DELETE_BACKING = "DELETE_BACKING";

export const fetchBackings = () => ({
  type: FETCH_BACKINGS
});

export const fetchBacking = id => ({
  type: FETCH_BACKING,
  id
});

export const createBacking = backing => ({
  type: CREATE_BACKING,
  backing
});

export const updateBacking = backing => ({
  type: UPDATE_BACKING,
  backing
});

export const deleteBacking = id => ({
  type: DELETE_BACKING,
  id
});

export const receiveAllBackings = backings => ({
  type: RECEIVE_ALL_BACKINGS,
  backings
});

export const receiveBacking = backing => ({
  type: RECEIVE_BACKING,
  backing
});

export const removeBacking = backing => ({
  type: REMOVE_BACKING,
  backing
});
