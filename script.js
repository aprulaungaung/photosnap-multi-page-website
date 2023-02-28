
let headerNav = "<div class='titlebar'>"+
                  '<div class= headerBrand></div>' +
                  '<label class=checkLabel for="checkbox"><img src=assets/shared/mobile/menu.svg class=hamburger alt=hamburger/></label>'+
                  '<input type="checkbox" id="checkbox"/>'+
                   '<ul class=menu-package><li class=sub-menu><a href="stories.html">STORIES</a></li><li class=sub-menu><a href="features.html">FEATURES</a></li><li class=sub-menu><a href="pricing.html">PRICING</a></li></ul>'+
                   '<div class=headerButton type=button>GET AN INVITE</div>'+
"</div>"

let footerNav = "<div class='footer-title'>"+
                  '<div class= footerBrand></div>' +
                    '<div class=socialMedia><div class=facebook></div><div class=youtube></div><div class=twitter></div><div class=pinterest></div><div class=instagram></div></div>'+
                   '<ul class=footer-menu-package><li class=sub-menu ><a href="index.html">HOME</a></li><li class=sub-menu>STORIES</li><li class=sub-menu>FEATURES</li><li class=sub-menu>PRICING</li></ul>'+
                     '<div class=footerButton type=button>GET AN INVITE</div>'+
                     '<div class=copyRight></div>'+
"</div>"




topLine();
bottomLine();
getArrow();
getBlackArrow();





function topLine(){

  $(".headerLine").append(headerNav);
  $(".headerBrand").html("<img src='assets/shared/desktop/logo.svg' class='logo' alt='logo'/>");


}



function bottomLine(){

  let currentYear = new Date().getFullYear();

  $(".baseLine").append(footerNav);
  $(".footerBrand").html("<img  src='assets/shared/desktop/footer-logo.svg' class='logo' alt='logo'/>");
  $(".facebook").html("<img src='assets/shared/desktop/facebook.svg' class='social-icon' alt='facebook'/>")
  $(".youtube").html("<img src='assets/shared/desktop/youtube.svg' class='social-icon' alt='facebook'/>")
  $(".twitter").html("<img src='assets/shared/desktop/twitter.svg' class='social-icon' alt='facebook'/>")
  $(".pinterest").html("<img src='assets/shared/desktop/pinterest.svg' class='social-icon' alt='facebook'/>")
  $(".instagram").html("<img src='assets/shared/desktop/instagram.svg' class='social-icon' alt='facebook'/>")
  $(".footerButton").append($("<img src='assets/shared/desktop/arrow.svg' class='footerArrow' alt='arrow'/>"))
  $(".copyRight").html("Copyright "+" "+currentYear+" "+"All Right Reserved");
}

function getArrow(){

$(".arrowMe").append($("<img src='assets/shared/desktop/arrow.svg' class='arrow' alt='arrow'/>"));

}

function getBlackArrow(){

  $(".blackArrow").append($("<img src='assets/shared/desktop/black-arrow.svg' class='blackArrow' alt='blackArrow'/>"));
}

function stories(){
  $(".stories").on("click", ()=>{
    console.log("I got click");
  })
}
