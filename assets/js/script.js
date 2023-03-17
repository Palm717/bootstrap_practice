// var h1 = document.querySelector("h1");
// var span = document.createElement("span");

// h1.style.cssText = "color: red; padding: 35px";
// span.innerText = "some text";

// h1.append(span);
//The above is the vanilla form of js and is known as JQuery

///////////////////////////////////////////////////////////////////////

//THIS IS THE METHODOLOGY TO GET TO JQUERY();

// function jQuery(selector) {
//   var el = document.querySelector(selector);
//   var methodStack = {};

//   methodStack.text = function (str) {
//     el.innerText = str;

//     return methodStack;
//   };

//   methodStack.css = function (prop, val) {
//     el.style[prop] = val;

//     return methodStack;
//   };

//   return methodStack;
// }

// jQuery("h1").text("Something Else").css("color", "red");
////////////////////////////////////////////////////////////////////////

//using jQuery

// jQuery(); // was renamed to $()

// $("h1").text("Changed!");

// $("h1").html(
//   "<span>This is a span tag that has been inserted into the h1</span>"
// );

// $("h1") // call jQuery
//   .text("Changed!") //begin chain effects of element changes
//   .css({
//     color: "red",
//     backgroundColor: "#444",
//     padding: "25px 30px",
//   })
//   .append("<span>This is added to the end</span>");

/////////////////////////////////////////////////////////////////////////////

//creating a button with jQuery

//vanilla **************************************

// var btn = document.createElement("button");

// var wrapper = document.querySelector(".wrapper");

// btn.innerText = "Submit";

// wrapper.append(btn);

//jQuery method ******************************

// var btn = $("<button>");

// btn.text("Click Me");

// $(".wrapper").append(btn);

////////////////////////////////////////////////////////////////////////////////

//vanilla *******************************

// var lis = document.querySelectorAll("li");

// for (var li of lis) {
//   li.innerText = "Changed";
// }

//jQuery *********************************

var lis = $("li");

lis.text("Something Else").css("color", "green");

/////////////////////////////////////////////////////////////////////////////////

//connect with a server using jQuery *****************
// aka server side apis *****************************

//get the data ****** then hand me the data as an argument
$.get("https://swapi.dev/api/people").then(function (data) {
  var characters = data.results;

  for (var char of characters) {
    $("#char-output").append("<li>" + char.name + "</l1");
  }
});
