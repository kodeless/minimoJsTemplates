function defineAttributes(types){
  return {
    "title": types.mandatory.string,
    "description": types.string.defaultValue('')
  }
}