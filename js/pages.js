'use strict';


let rowGenerator = 0;
let IDGenerator = 0;


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

function createCard(state, IDName){

 $(IDName).append("<div class='namecard py2' id='namecard" + IDGenerator + "'</div>");

 $("#namecard" + IDGenerator).append("<div class='circle'></div>");

 $("#namecard" + IDGenerator).append("<h3 class='text-center'>" + state.name + "</h3>");

 $("#namecard" + IDGenerator).append("<p class='text-center m-0'>" + state.role + "</p>");


 // add clickable card

 $("#namecard" + IDGenerator).append("<a data-toggle='modal' data-target='#modal-card" + IDGenerator + "'  class='stretched-link'></a>");

  $("#modal-card").clone().appendTo($(IDName));




  // CHANGE IDS
  $("#modal-card").prop("id", "modal-card" + IDGenerator);
  $("#js-modal-header").last().prop("id", "js-modal-header" + IDGenerator);
  $("#js-modal-body").last().prop("id", "js-modal-body" + IDGenerator);
  $("#js-modal-button").last().prop("id", "js-modal-button" + IDGenerator);


  $("#js-modal-body" + IDGenerator).append("<h3 class='modal-title text-center mb-3'>" + state.name + "</h3>");

  $("#js-modal-body " + IDGenerator).append("<p class='modal-text text-center'>" + state.pronouns + "</p>");


  $("#js-modal-body" + IDGenerator).append("<p class='modal-text text-center'> <strong> Role </strong> <br>" + state.role + "</p>");
  
  $("#js-modal-body" + IDGenerator).append("<p class='modal-text text-center'><strong> School </strong> <br>" + state.school + "</p>");

  $("#js-modal-body" + IDGenerator).append("<p class='modal-text text-center'><strong> Bio </strong> <br>" + state.bio + "</p>");
  console.log(state);
  IDGenerator++;  

}



function renderCards(arrayObjects, IDName){
  for(let i = 0; i < arrayObjects.length; i++){
    console.log(i);
    createCard(arrayObjects[i], IDName);
  }
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

function fetchEvents(jsonPath, IDName){
  let promise;
  fetch(new Request(jsonPath))
  .then(function(response){
    promise = response.json();
    return promise;
  })
  .then(data => {
    castsArray = data.result;
    //console.log(data.result);
    renderRows(data.result, jsonPath);
    renderCards(data.result, IDName);

    

  }).catch(function(err){
    renderError(err);
  })

  return promise;
}

/*fetchEvents('./json/twelfth-night-cast.json');
fetchEvents('./json/twelfth-night-production.json');
fetchEvents('./json/devised-cast.json');
fetchEvents('./json/devised-production.json');
*/

fetchEvents('./json/devised-cast.json', "#b-cast-program"); 
fetchEvents('./json/devised-production.json', "#b-production-program"); 

function renderError(err){
  $("#js-flex-pages").append("<p class='alert alert-danger'>" +err.message + "</p>");
}