/* 
  This chunk of jQuery code makes a subtle change to the directional icons
  of the Bootstrap carousel:

  When the user hovers over either the "left" or "right" arrow icon of a 
  carousel, this code will change the icon outline to a "filled" version.
*/
const onDocumentReady = () => {
  $(".bi-caret-left").hover(function () {
    $(this).toggleClass("bi-caret-left bi-caret-left-fill");
  });

  $(".bi-caret-right").hover(function () {
    $(this).toggleClass("bi-caret-right bi-caret-right-fill");
  });
};

$(document).ready(onDocumentReady);
