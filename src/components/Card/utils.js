import * as FavoriteActions from "../../redux/constants"

export const getActionTypes = (itemType) => {
    switch (itemType) {
      case "characters":
        return {
          add: FavoriteActions.ACTION_ADD_FAVORITE_CHARACTERS,
          remove: FavoriteActions.ACTION_REMOVE_FAVORITE_CHARACTERS,
        }
      case "comics":
        return {
          add: FavoriteActions.ACTION_ADD_FAVORITE_COMICS,
          remove: FavoriteActions.ACTION_REMOVE_FAVORITE_COMICS,
        }
      case "stories":
        return {
          add: FavoriteActions.ACTION_ADD_FAVORITE_STORIES,
          remove: FavoriteActions.ACTION_REMOVE_FAVORITE_STORIES,
        }
      default:
        return null
    }
  }