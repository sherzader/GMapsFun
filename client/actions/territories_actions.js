export const removeTerritory = index => ({
  type: 'REMOVE_TERRITORY',
  index
});

export const markTerritory = name => ({
  type: 'ADD_AND_MARK',
  name
})
