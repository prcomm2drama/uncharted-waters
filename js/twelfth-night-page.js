'use strict';


let rowGenerator = 0;


function createCastRow(state){
  $("#js-cast-table").append("<tr id='js-row" + rowGenerator + "'></tr>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.name + "</td>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.role + "</td>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.school + "</td>")

  rowGenerator++;
}

function createProductionRow(state){
  $("#js-production-table").append("<tr id='js-row" + rowGenerator + "'></tr>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.name + "</td>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.role + "</td>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.school + "</td>")

  rowGenerator++;
}


function renderRows(arrayObjects, name){
  if(name.includes("cast")){
    for(let i = 0; i < arrayObjects.length; i++){
      createCastRow(arrayObjects[i]);
    }
  }else if(name.includes("production")){
    for(let i = 0; i < arrayObjects.length; i++){
      createProductionRow(arrayObjects[i]);
    }
  }
}
let castsArray =[];

function fetchEvents(jsonPath){
  let promise;
  fetch(new Request(jsonPath))
  .then(function(response){
    promise = response.json();
    return promise;
  })
  .then(data => {
    castsArray = data.result;
    console.log(data.result);
    renderRows(data.result, jsonPath);

  }).catch(function(err){
    renderError(err);
  })

  return promise;
}

fetchEvents('./json/twelfth-night-cast.json');
fetchEvents('./json/twelfth-night-production.json');


function renderError(err){
  $("#js-flex-pages").append("<p class='alert alert-danger'>" +err.message + "</p>");
}