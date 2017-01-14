export const addTerritory = (name) => ({
  type: 'ADD_TERRITORY',
  name
});

export const removeTerritory = index => ({
  type: 'REMOVE_TERRITORY',
  index
});

export const toggleMark = (index, mark) => ({
  type: 'TOGGLE_MARK',
  index,
  mark
});

export const addAndMark = name => ({
  type: 'ADD_AND_MARK',
  name
})
