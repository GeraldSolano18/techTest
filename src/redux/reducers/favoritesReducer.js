import {
  ACTION_ADD_FAVORITE_COMICS,
  ACTION_ADD_FAVORITE_CHARACTERS,
  ACTION_ADD_FAVORITE_STORIES,
  ACTION_REMOVE_FAVORITE_COMICS,
  ACTION_REMOVE_FAVORITE_CHARACTERS,
  ACTION_REMOVE_FAVORITE_STORIES,
} from "../constants"

const initialState = {
  comics: [],
  characters: [],
  stories: [],
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_ADD_FAVORITE_COMICS:
      return {
        ...state,
        comics:
          state.comics && state.comics.length > 0
            ? [...state.comics, payload]
            : [payload],
      }
    case ACTION_REMOVE_FAVORITE_COMICS: {
      const removed = state.comics.filter(f => f.id !== payload.id)
      return {
        ...state,
        comics: [...removed],
      }
    }
    case ACTION_ADD_FAVORITE_CHARACTERS:
      return {
        ...state,
        characters:
          state.characters && state.characters.length > 0
            ? [...state.characters, payload]
            : [payload],
      }
    case ACTION_REMOVE_FAVORITE_CHARACTERS: {
      const removed = state.characters.filter(f => f.id !== payload.id)
      return {
        ...state,
        characters: [...removed],
      }
    }
    case ACTION_ADD_FAVORITE_STORIES:
      return {
        ...state,
        stories:
          state.stories && state.stories.length > 0
            ? [...state.stories, payload]
            : [payload],
      }
    case ACTION_REMOVE_FAVORITE_STORIES: {
      const removed = state.stories.filter(f => f.id !== payload.id)
      return {
        ...state,
        stories: [...removed],
      }
    }
    default:
      return state
  }
}

export default reducer
