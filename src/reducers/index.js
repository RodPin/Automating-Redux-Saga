export function generateTypes(allTypes) {
  const types = {};
  allTypes.forEach(t => {
    types[t] = t;
  });
  return types;
}
export function getAction(name) {
  const func = name.toLowerCase().replace(/([_][a-z])/gi, $1 => {
    return $1.toUpperCase().replace("_", "");
  });

  const actionObj = {};
  actionObj[func] = action => ({ type: name, payload: action });
  return actionObj;
}
