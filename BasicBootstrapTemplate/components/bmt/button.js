function defineAttributes(types){
  return {
    "id": types.string,
    "type": types.string.defaultValue('default'),
    "onclick": types.mandatory.script
  }
}