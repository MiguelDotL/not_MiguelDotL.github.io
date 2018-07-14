$(function(){
  const hamburger   = $('#hamburger');
  const mobileNav   = $('#mobileNav');
  let mobileNavLink = $('#mobileNav>ul>li>a');
  let mobileNavOpen = false;



  hamburger.click(function () {
    
    mobileNavOpen = !mobileNavOpen;
    $(this).toggleClass("is-active");
    mobileNav.toggleClass("is-active");
    console.log("thing", mobileNavOpen);
  });
  
  mobileNavLink.on('click', function() {
    console.log("things", mobileNavOpen);
    // if (mobileNavOpen) {
      console.log("things");
      mobileNav.removeClass("is-active");

      // closeMobileNav();
    // }
  })
  
  function closeMobileNav() {
    mobileNav.removeClass("is-active");
  }

  function checkNavOpen() {

  }

  
});