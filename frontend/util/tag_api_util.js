export const fetchTags = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/tags',
    success
  });
};

export const fetchTag = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/tags/${id}`,
    success
  });
};

export const createTag = (tag, success) => {
  $.ajax({
    method: 'POST',
    url: `api/tags`,
    data: {tag},
    success
  });
};

export const updateTag = (tag, success) => {
  $.ajax({
    method: 'PATCH',
    url: `api/tags/${tag.id}`,
    data: {tag},
    success
  });
};

export const deleteTag = (id, success) => {
  $.ajax({
    url: `api/tags/${id}`,
    type: "DELETE",
    success
  });
};
