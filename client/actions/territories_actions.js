export const removeTerritory = index => ({
  type: 'REMOVE_TERRITORY',
  index
});

export const toggleMark = (index, mark) => ({
  type: 'TOGGLE_MARK',
  index,
  mark
});

export const markTerritory = name => ({
  type: 'ADD_AND_MARK',
  name
})
