export const removeTerritory = index => ({
  type: 'REMOVE_TERRITORY',
  index
});

export const markTerritory = (name, id) => ({
  type: 'MARK_TERRITORY',
  name
})
