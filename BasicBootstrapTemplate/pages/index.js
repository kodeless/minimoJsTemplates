var objList = [];
var objSample;
var itemList = [{
  id: 1,
  name: 'One'
},{
  id: 2,
  name: 'Two'
},{
  id: 3,
  name: 'Three'
}];

function addToTable(){
  objList.push(objSample);
  objSample = null;
}

function showModal(){
  X.popup({url: '/modal', title: 'Test modal'});
}