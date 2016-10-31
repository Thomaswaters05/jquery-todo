"use strict";


//ADDS X and EDIT Functionality to each list item

$(function () {
  function addItem () {
    // append to the list
    $("#myUL").append('<li> -  <span>' + $("#userInput").val() + '</span> <small><a href="#edit">Edit</a> &bull; <a href="#delete">Delete</a></small></li>');
    // clear the text
    $("#userInput").val("");
  }
  $("#userInput").keydown(function (e) {
    // if enter key pressed
    if (e.which == 13)
      addItem();
  });
  // on clicking the add button
  $("#button").click(addItem);
  // delegate the events to dynamically generated elements
  // for the edit button
  $(document).on("click", 'a[href="#edit"]', function () {
    // make the span editable and focus it
    $(this).closest("li").find("span").prop("contenteditable", true).focus();
    return false;
  });
  // for the delete button
  $(document).on("click", 'a[href="#delete"]', function () {
    // remove the list item
    $(this).closest("li").fadeOut(function () {
      $(this).remove();
    });
    return false;
  });
});


//Give ability to complete the item (checkbox/cross out)
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


//Completed items should show up on another list


    $(document).on('click', 'span', function() {
        $(this).toggleClass('strike');
        $(this).appendTo('#completedList');
        $(".checked").remove();
    });

 // $(".checked").detach.appendTo("#completedList"); //this is a hint of what to use


// Give ability to uncomplete an item






// NOT USING THI CODE- V1 MISFIT CODE *****************************************************


//Add to do list items via the input box (dynamically) once button is cliked
// $('button').click(function(){
//     $('#myUL').append($('<li>', {
//          text: $('#userInput').val()
//     }));
// }); //THIS WORKS BUT IS NOT FUNCTIONING CORRECT- GOOD REF THOUGH



//Adds X next to each list item
// let userToDoList = $("li");
// let i;
// for (i = 0; i < userToDoList.length; i++) {
//   var span = document.createElement("span");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   userToDoList[i].appendChild(span);
// }


//Deletes if the X is clicked
// $('.close').click(function(e){
//   $(e.target).parent().remove();
// });


// NOT USING THI CODE- V1 MISFIT CODE *****************************************************
