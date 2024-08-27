$("#someText").click(function () {
  alert("The paragraph was clicked.");
});

//let icon1 = document.getElementById("icon1");
//let menu1 = document.getElementById("menu1");

//****************************************** */

$(".qrImage").click(function () {
  alert($(this).children("img").prop("src").substring(0, 40));
  // let rotateBox = 180;

  // var iconArrow = $(this).find($(".iconArrow"));
  // iconArrow.css({
  //   transform: "rotate(" + rotateBox + "deg)",
  //   transition: `.6s`,
  // });

  // var subMenu = $(this).next($(".subMenu"));

  // if (subMenu.is(":visible")) {
  //   subMenu.hide("slow");
  // }

  // if (subMenu.is(":hidden")) {
  //   subMenu.show("slow");
  // }

  //alert(subMenu.is(":visible"));
});

//****************************************** */

// const showMenu1 = (flag) => {
//   if (flag) {
//     icon1.classList.toggle("rotate-180");
//     menu1.classList.toggle("hidden");
//   }
// };

//****************************************** */
