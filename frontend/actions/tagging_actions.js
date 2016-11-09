export const FETCH_TAGGINGS = "FETCH_TAGGINGS";
export const FETCH_TAGGING = "FETCH_TAGGING";
export const RECEIVE_ALL_TAGGINGS = "RECEIVE_ALL_TAGGINGS";
export const RECEIVE_TAGGING = "RECEIVE_TAGGING";
export const REMOVE_TAGGING = "REMOVE_TAGGING";
export const CREATE_TAGGING = "CREATE_TAGGING";
export const UPDATE_TAGGING = "UPDATE_TAGGING";
export const DELETE_TAGGING = "DELETE_TAGGING";

export const fetchTaggings = () => ({
  type: FETCH_TAGGINGS
});

export const fetchTagging = id => ({
  type: FETCH_TAGGING,
  id
});

export const createTagging = tagging => ({
  type: CREATE_TAGGING,
  tagging
});


export const updateTagging = tagging => ({
  type: UPDATE_TAGGING,
  tagging
});

export const deleteTagging = id => ({
  type: DELETE_TAGGING,
  id
});

export const receiveAllTaggings = taggings => ({
  type: RECEIVE_ALL_TAGGINGS,
  taggings
});

export const receiveTagging = tagging => ({
  type: RECEIVE_TAGGING,
  tagging
});


export const removeTagging = tagging => ({
  type: REMOVE_TAGGING,
  tagging
});
