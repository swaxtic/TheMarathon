export function addToFavRequest(id) {
  return {
    type: '@fav/ADD_REQUEST',
    id,
  };
}
export function addToFavSuccess(id, title, poster,) {
  return {
    type: '@fav/ADD_SUCCESS',
    id,
    title,
    poster,
  };
}

export function removeFromFav(id) {
  return {type: '@fav/REMOVE', id};
}
