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

function createCard(state, init){

 console.log(init);
 $("#cast-program").append("<div class='namecard py2' id='namecard" + IDGenerator + "'</div>");

 console.log(init);

 $("#namecard" + IDGenerator).append("<div class='circle'></div>");

 $("#namecard" + IDGenerator).append("<h3 class='text-center'>" + state.name + "</h3>");

 $("#namecard" + IDGenerator).append("<p class='text-center m-0'>" + state.role + "</p>");

 $("#namecard" + IDGenerator).append("<p class='text-center m-0'>" + state.school + "</p>");

 IDGenerator++;

}

function renderCards(arrayObjects){
  for(let i = 0; i < arrayObjects.length; i++){
    console.log(i);
    createCard(arrayObjects[i], "#cast-program");
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

function fetchEvents(jsonPath){
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
    //renderCards(data.result);

    

  }).catch(function(err){
    renderError(err);
  })

  return promise;
}

fetchEvents('./json/twelfth-night-cast.json');
fetchEvents('./json/twelfth-night-production.json');
fetchEvents('./json/devised-cast.json');
fetchEvents('./json/devised-production.json');


/*fetchEvents('./json/devised-cast.json'); */

function renderError(err){
  $("#js-flex-pages").append("<p class='alert alert-danger'>" +err.message + "</p>");
}