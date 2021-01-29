'use strict';


let rowGenerator = 0;


function createTwelfthCastRow(state){
  $("#js-twelfth-cast-table").append("<tr id='js-row" + rowGenerator + "'></tr>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.name + "</td>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.role + "</td>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.school + "</td>")

  rowGenerator++;
}

function createTwelfthProductionRow(state){
  $("#js-twelfth-production-table").append("<tr id='js-row" + rowGenerator + "'></tr>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.name + "</td>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.role + "</td>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.school + "</td>")

  rowGenerator++;
}

function createDevisedCastRow(state){
  $("#js-devised-cast-table").append("<tr id='js-row" + rowGenerator + "'></tr>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.name + "</td>")
  /*$("#js-row" + rowGenerator).append("<td class='p-2'>" + state.role + "</td>") */
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.school + "</td>")

  rowGenerator++;
}

function createDevisedProductionRow(state){
  $("#js-devised-production-table").append("<tr id='js-row" + rowGenerator + "'></tr>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.name + "</td>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.role + "</td>")
  $("#js-row" + rowGenerator).append("<td class='p-2'>" + state.school + "</td>")

  rowGenerator++;
}




function renderRows(arrayObjects, name){
  if(name.includes("cast") && name.includes("twelfth")){
    for(let i = 0; i < arrayObjects.length; i++){
      createTwelfthCastRow(arrayObjects[i]);
    }
  }else if(name.includes("production") && name.includes("twelfth")){
    for(let i = 0; i < arrayObjects.length; i++){
      createTwelfthProductionRow(arrayObjects[i]);
    }
  }else if(name.includes("cast") && name.includes("devised")){
    for(let i = 0; i < arrayObjects.length; i++){
      createDevisedCastRow(arrayObjects[i]);
    }
  }else if(name.includes("production") && name.includes("devised")){
    for(let i = 0; i < arrayObjects.length; i++){
      createDevisedProductionRow(arrayObjects[i]);
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
fetchEvents('./json/devised-cast.json');
fetchEvents('./json/devised-production.json');


function renderError(err){
  $("#js-flex-pages").append("<p class='alert alert-danger'>" +err.message + "</p>");
}