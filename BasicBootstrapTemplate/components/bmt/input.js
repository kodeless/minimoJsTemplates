function defineAttributes(types){
  return {
    "id": types.string.defaultValue("_" + Math.random()),
    "type": types.mandatory.string,
    "bindto": types.mandatory.bind,
    "label": types.string.defaultValue(''),
    "onclick": types.script,
    "onchange": types.script,
    "onkeyup": types.script,
    "onmouseover": types.script,
    "onmouseout": types.script,
    "onblur": types.script,
    "size": types.mandatory.number
  }
}

function fire(eventName){
  if(this[eventName]){
    this[eventName]();
  }
}