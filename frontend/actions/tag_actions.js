export const FETCH_TAGS = "FETCH_TAGS";
export const FETCH_TAG = "FETCH_TAG";
export const RECEIVE_ALL_TAGS = "RECEIVE_ALL_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const CREATE_TAG = "CREATE_TAG";
export const UPDATE_TAG = "UPDATE_TAG";
export const DELETE_TAG = "DELETE_TAG";

export const fetchTags = () => ({
  type: FETCH_TAGS
});

export const fetchTag = id => ({
  type: FETCH_TAG,
  id
});

export const createTag = tag => ({
  type: CREATE_TAG,
  tag
});


export const updateTag = tag => ({
  type: UPDATE_TAG,
  tag
});

export const deleteTag = id => ({
  type: DELETE_TAG,
  id
});

export const receiveAllTags = tags => ({
  type: RECEIVE_ALL_TAGS,
  tags
});

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});


export const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
});
