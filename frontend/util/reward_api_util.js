export const fetchRewards = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/rewards',
    success
  });
};

export const fetchReward = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/rewards/${id}`,
    success
  });
};

export const createReward = (reward, success) => {
  $.ajax({
    method: 'POST',
    url: `api/rewards`,
    data: {reward},
    success
  });
};

export const updateReward = (reward, success) => {
  $.ajax({
    method: 'PATCH',
    url: `api/rewards/${reward.id}`,
    data: {reward},
    success
  });
};

export const deleteReward = (id, success) => {
  $.ajax({
    url: `api/rewards/${id}`,
    type: "DELETE",
    success
  });
};
