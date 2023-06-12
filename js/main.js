const onDocumentReady = () => {
  $(".bi-caret-left").hover(function () {
    $(this).toggleClass("bi-caret-left bi-caret-left-fill");
  });

  $(".bi-caret-right").hover(function () {
    $(this).toggleClass("bi-caret-right bi-caret-right-fill");
  });
};

$(document).ready(onDocumentReady);
