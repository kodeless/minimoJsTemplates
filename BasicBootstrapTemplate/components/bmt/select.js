function defineAttributes(types){
  return {
    "id": types.string.defaultValue("_" + Math.random()),
    "list": types.boundVariable,
    "bindto": types.mandatory.bind,
    "label": types.string.defaultValue(''),
    "onchange": types.script,
    "size": types.mandatory.number,
    "allowempty": types.bool.defaultValue(true),
    "description": types.mandatory.string
  }
}