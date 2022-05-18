export const sort = (data) => {
  return data.sort((current, next) => {
    return current.id - next.id
  }).reverse()
}

