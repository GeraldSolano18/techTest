import { requestData } from "../axios/axiosClient";

export const getAllComics = async (options = {}) => {
  const {
    format = "",
    title = "",
    issue = "",
    limit = 20,
    offset = 0,
    order = "title",
    characterId = 0,
    storyId = 0,
  } = options

  let params = {
    orderBy: order,
    limit,
    offset,
  }

  let url = `/comics`

  if (format) {
    params.format = format
  }

  if (title) {
    params.titleStartsWith = title
  }

  if (issue) {
    params.issueNumber = issue
  }

  if (characterId) {
      console.log('character id', characterId)
    url = `/characters/${characterId}/comics`
  }

  if (storyId) {
    url = `/stories/${storyId}/comics`
  }

  try {
    const fetched = await requestData({
      method: "GET",
      url,
      params
    });

    return { data: fetched.data.data }
  } catch (error) {
    return { error }
  }
}

export const getComic = async id => {
  if (!id) {
    return { error: { status: "Comic id is required" } }
  }

  try {
    const fetched = await requestData({
      method: "GET",
      url: `/comics/${id}`
    })

    return { data: fetched.data.data }
  } catch (error) {
    return { error }
  }
}