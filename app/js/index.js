function OpenModal(){document.getElementById("Mob-Nav").style.display="flex"}function CloseModal(){document.getElementById("Mob-Nav").style.display="none "}function OpenDrop(){document.getElementById("drop").style.display="block ",document.getElementById("none").style.display="none ",document.getElementById("block").style.display="block "}function CloseDrop(){document.getElementById("drop").style.display="none ",document.getElementById("none").style.display="block ",document.getElementById("block").style.display="none "}function OpenDropSub(){document.getElementById("sub-drop").style.display="block ",document.getElementById("sub-none").style.display="none ",document.getElementById("sub-block").style.display="block "}function CloseDropSub(){document.getElementById("sub-drop").style.display="none ",document.getElementById("sub-none").style.display="block ",document.getElementById("sub-block").style.display="none "}$(window).scroll(function(){$(window).scrollTop()>=20?$(".main_navbar").attr("style",`    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;    z-index: 100;`):$(".main_navbar").attr("style"," position: unset;width: 100%;    z-index: 100;")}),$(document).ready(function(){$("#query").on("keyup",function(e){if(13!=e.which){let l=$("body .ui-menu-item-wrapper.ui-state-active > a").data("slug");$("#slug_inp").val(l)}if(13==e.which){var n=$("#slug_inp").val();window.location.href="/coupons/"+n+"/"}}),console.log("Document is ready")});