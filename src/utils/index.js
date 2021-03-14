export const getThumbURL = thumb => {
    if (thumb && thumb.path && thumb.extension) {
      return `${thumb.path}.${thumb.extension}`
    } else {
      return null
    }
  }
  