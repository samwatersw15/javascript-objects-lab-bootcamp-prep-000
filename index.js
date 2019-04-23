var recipes = {
  'tomatoes':4,
  'lettuce':'iceberg',
  'lemon juice':'sprinkle',
  'red onion':'chopped'
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object,{ [key]: value })
}
