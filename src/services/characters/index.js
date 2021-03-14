import {requestData} from '../axios/axiosClient'



export const getAllCharacters = async (options = {}) => {
    const {
      name = "",
      series = "",
      limit = 20,
      offset = 0,
      comicId = 0,
      storyId = 0,
    } = options
  
    let params = {
      limit,
      offset,
    }
  
    if (name) {
      params.nameStartsWith = name
    }
  
    if (series) {
      params.series = series
    }
  
    let url = `/characters`
  
    if (comicId) {
      url = `/comics/${comicId}/characters`
    }
  
    if (storyId) {
      url = `/stories/${storyId}/characters`
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
  


  export const getCharacter = async id => {
    if (!id) {
      return { error: { status: "Character id is required" } }
    }
  
    try {
      const fetched = await requestData({
        method: "GET",
        url: `/characters/${id}`
      })
  
      return { data: fetched.data.data }
    } catch (error) {
      return { error }
    }
  }