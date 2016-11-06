export const fetchBackings = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/backings',
    success
  });
};

export const fetchBacking = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/backings/${id}`,
    success
  });
};

export const createBacking = (backing, success) => {
  $.ajax({
    method: 'POST',
    url: `api/backings`,
    data: {backing},
    success
  });
};

export const updateBacking = (backing, success) => {
  $.ajax({
    method: 'PATCH',
    url: `api/backings/${backing.id}`,
    data: {backing},
    success
  });
};

export const deleteBacking = (id, success) => {
  $.ajax({
    url: `api/backings/${id}`,
    type: "DELETE",
    success
  });
};
