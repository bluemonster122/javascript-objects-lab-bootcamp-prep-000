var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) { return Object.assign({}, object, {[key]:value}) }
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) { Object.assign(object, {[key]:value}) }
function deleteFromObjectByKey(object, key) { var ret = Object.assign({}, object); delete ret[key]; return ret }
