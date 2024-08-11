// export const addToFavorites = (product) => ({
//   type: "ADD_TO_FAVORITES",
//   payload: product,
// });

// export const removeFromFavorites = (productId) => ({
//   type: "REMOVE_FROM_FAVORITES",
//   payload: productId,
// });
export const addToFavorites = (movie) => ({
  type: "ADD_TO_FAVORITES",
  payload: movie,
});

export const removeFromFavorites = (movieId) => ({
  type: "REMOVE_FROM_FAVORITES",
  payload: movieId,
});
