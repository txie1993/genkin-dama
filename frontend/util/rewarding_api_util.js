export const fetchRewardings = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/rewardings',
    success
  });
};

export const fetchRewarding = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/rewardings/${id}`,
    success
  });
};

export const createRewarding = (rewarding, success) => {
  $.ajax({
    method: 'POST',
    url: `api/rewardings`,
    data: {rewarding},
    success
  });
};

export const updateRewarding = (rewarding, success) => {
  $.ajax({
    method: 'PATCH',
    url: `api/rewardings/${rewarding.id}`,
    data: {rewarding},
    success
  });
};

export const deleteRewarding = (id, success) => {
  $.ajax({
    url: `api/rewardings/${id}`,
    type: "DELETE",
    success
  });
};
