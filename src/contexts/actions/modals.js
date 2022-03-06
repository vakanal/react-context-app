export const showModal = () => ({
  type: "SHOW_MODAL",
  payload: true,
});

export const closeModal = () => ({
  type: "CLOSE_MODAL",
  payload: false,
});
