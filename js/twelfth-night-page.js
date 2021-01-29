'use strict';


let rowGenerator = 0;


function createRow(state){
  $("#js-cast-table").append("<tr id='js-row" + rowGenerator + "'></tr>")
  $("#js-row" + rowGenerator).append("<td class='py-2'>" + state.name + "</td>")
  $("#js-row" + rowGenerator).append("<td class='py-2'>" + state.role + "</td>")
  $("#js-row" + rowGenerator).append("<td class='py-2'>" + state.school + "</td>")

  rowGenerator++;
}


function renderRows(arrayObjects){
  for(let i = 0; i < arrayObjects.length; i++){
    createRow(arrayObjects[i]);
  }

}
let castsArray =[];
function fetchEvents(){
  let promise;
  fetch(new Request('./json/twelfth-night-cast.json'))
  .then(function(response){
    promise = response.json();
    return promise;
  })
  .then(data => {
    castsArray = data.result;
    console.log(data.result);
    renderRows(data.result);

  }).catch(function(err){
    renderError(err);
  })

  return promise;
}

fetchEvents();

function renderError(err){
  $("#js-flex-pages").append("<p class='alert alert-danger'>" +err.message + "</p>");
}