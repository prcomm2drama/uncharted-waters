'use strict';


let rowGenerator = 0;
let IDGenerator = 0;


function createUWRow(state){
  $("#js-uw-table").append("<tr id='js-row" + rowGenerator + "'></tr>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.name + "</td>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.role + "</td>")
 

  rowGenerator++;
}

function createSURow(state){
  $("#js-su-table").append("<tr id='js-row" + rowGenerator + "'></tr>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.name + "</td>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.role + "</td>")


  rowGenerator++;
}

function createCCARow(state){

  $("#js-cca-table").append("<tr id='js-row" + rowGenerator + "'></tr>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.name + "</td>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.role + "</td>")
 

  rowGenerator++;
}


function renderRows(arrayObjects, name){
  if(name.includes("uw")){
    for(let i = 0; i < arrayObjects.length; i++){
      createUWRow(arrayObjects[i]);
    }
  }else if(name.includes("seattle-u")){
    for(let i = 0; i < arrayObjects.length; i++){
      createSURow(arrayObjects[i]);
    }
  }else if(name.includes("cca")){
    for(let i = 0; i < arrayObjects.length; i++){
      createCCARow(arrayObjects[i]);
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


fetchEventsTable('./json/seattle-u.json')

fetchEventsTable('./json/cca.json')

fetchEventsTable('./json/uw.json')


function renderError(err){
  $("#js-flex-pages").append("<p class='alert alert-danger'>" +err.message + "</p>");
}