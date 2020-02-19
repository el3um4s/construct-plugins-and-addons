"use strict";

window["funzioniRegistrateInC3file"] = function (modifiers = "", nameFunction = "", params = "") {

  // aggiungo modificatori:
  if (modifiers.includes('prevent'))  event.preventDefault();
  if (modifiers.includes('stop')) event.stopPropagation();


  if (params != "") {
    self["c3_callFunction"](nameFunction,params);
  } else {
    self["c3_callFunction"](nameFunction);
  }
 };
