import { requestData } from "../axios/axiosClient";

export const getAllStories = async (options = {}) => {
  const { limit = 20, offset = 0, characterId = 0, comicId = 0 } = options

  let params = {
    limit,
    offset,
  }

  let url = `/stories`

  if (characterId) {
    url = `/characters/${characterId}/stories`
  }

  //
  


  if (comicId) {
    url = `/comics/${comicId}/comics`
  }

  try {
    const fetched = await requestData({
      method: "GET",
      url,
      params
    })

    return { data: fetched.data.data }
  } catch (error) {
    return { error }
  }
}

export const getStory = async id => {
  if (!id) {
    return { error: { status: "Story id is required" } }
  }

  try {
    const fetched = await requestData({
      method: "GET",
      url: `/stories/${id}`
    })

    return { data: fetched.data.data }
  } catch (error) {
    return { error }
  }
}
