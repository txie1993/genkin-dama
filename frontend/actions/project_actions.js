export const FETCH_PROJECTS = "FETCH_PROJECTS";
export const FETCH_PROJECT = "FETCH_PROJECT";
export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const CREATE_PROJECT = "CREATE_PROJECT";
export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";

export const fetchProjects = () => ({
  type: FETCH_PROJECTS
});

export const fetchProject = id => ({
  type: FETCH_PROJECT,
  id
});

export const createProject = project => ({
  type: CREATE_PROJECT,
  project
});

export const updateProject = project => ({
  type: UPDATE_PROJECT,
  project
});

export const deleteProject = id => ({
  type: DELETE_PROJECT,
  id
});

export const receiveAllProjects = projects => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const removeProject = project => ({
  type: REMOVE_PROJECT,
  project
});
