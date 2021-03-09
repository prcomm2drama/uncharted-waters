'use strict';


let rowGenerator = 0;
let IDGenerator = 0;


function createUWCastRow(state){
  $("#js-saa-table").append("<tr id='js-row" + rowGenerator + "'></tr>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.name + "</td>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.role + "</td>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.school + "</td>")

  rowGenerator++;
}

function createSURow(state){
  $("#js-twelfth-production-table").append("<tr id='js-row" + rowGenerator + "'></tr>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.name + "</td>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.role + "</td>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.school + "</td>")

  rowGenerator++;
}

function createCCARow(state){
  $("#js-devised-cast-table").append("<tr id='js-row" + rowGenerator + "'></tr>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.name + "</td>")
  /*$("#js-row" + rowGenerator).append("<td class='p-2'>" + state.role + "</td>") */
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.school + "</td>")

  rowGenerator++;
}


function renderRows(arrayObjects, name){
  if(name.includes("cast") && name.includes("twelfth")){
    for(let i = 0; i < arrayObjects.length; i++){
      createTwelfthCastRow(arrayObjects[i]);
    }
  }
}

let castsArray =[];


function fetchEventsTable(jsonPath){
  let promise;
  fetch(new Request(jsonPath))
  .then(function(response){
    promise = response.json();
    return promise;
  })
  .then(data => {
    castsArray = data.result;
    renderRows(data.result, jsonPath);


    

  }).catch(function(err){
    renderError(err);
  })

  return promise;
}


fetchEventsCards('./json/twelfth-night-cast.json', "#t-cast-program");
fetchEventsCards('./json/twelfth-night-production.json', "#t-production-program"); 
fetchEventsTable('./json/saa.json')


function renderError(err){
  $("#js-flex-pages").append("<p class='alert alert-danger'>" +err.message + "</p>");
}