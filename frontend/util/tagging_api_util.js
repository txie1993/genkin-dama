export const fetchTaggings = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/taggings',
    success
  });
};

export const fetchTagging = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/taggings/${id}`,
    success
  });
};

export const createTagging = (tagging, success) => {
  $.ajax({
    method: 'POST',
    url: `api/taggings`,
    data: {tagging},
    success
  });
};

export const updateTagging = (tagging, success) => {
  $.ajax({
    method: 'PATCH',
    url: `api/taggings/${tagging.id}`,
    data: {tagging},
    success
  });
};

export const deleteTagging = (id, success) => {
  $.ajax({
    url: `api/taggings/${id}`,
    type: "DELETE",
    success
  });
};
