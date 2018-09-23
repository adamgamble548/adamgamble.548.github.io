
/*-------------------------------------------*/
/*-------------jQuery Variables--------------*/
/*-------------------------------------------*/

var $window = $("window");



/*--------Arrow Variable ----------*/

var arrowDown = $("#arrowDown");

/*--------Landing Page Variables ----------*/

var landingPage = $("#landingPage")

/*--------My Story Variables ----------*/

var myStoryButton = $("#myStoryButton");
var myStorySection = $("#myStorySection");
var myStoryBottom = landingPage.offset().top + landingPage.outerHeight(true);

/*--------Portfolio Variables ----------*/

var myPortfolioButton = $("#myPortfolioButton");
var myPortfolioSection = $("#myPortfolioSection");

/*--------About Me Variables ----------*/

var aboutMeButton = $("#aboutMeButton");
var aboutMeSection = $("#aboutMeSection");

/*--------Contact Me Variables ----------*/

var contactMeButton = $("#contactMeButton");
var contactMeSection = $("#contactMeSection")

var emailButton = $(".emailButton");
var emailBox = $(".emailBox")

/*-------------------------------------------*/
/*-------------------------------------------*/
/*-------------------------------------------*/


/*-------------------------------------------*/
/*--------Navbar Event Handlers--------------*/
/*-------------------------------------------*/

/*--------My Story Event Handler ----------*/
myStoryButton.on("click", function() {
	var myStoryPosition = myStorySection.offset();
	$("html, body").animate({
		scrollTop: myStoryPosition.top}, "slow");
});

/*--------Portfolio Event Handler ----------*/

myPortfolioButton.on("click", function() {
	var myPortfolioPosition = myPortfolioSection.offset();
	$("html, body").animate({
		scrollTop: myPortfolioPosition.top}, "slow");
});

/*--------About Me Event Handler ----------*/

aboutMeButton.on("click", function() {
	var aboutMePosition = aboutMeSection.offset();
	$("html, body").animate({
		scrollTop: aboutMePosition.top}, "slow");
});

/*--------Contact Me Event Handler ----------*/

contactMeButton.on("click", function() {
	var contactMePosition = contactMeSection.offset();
	$("html, body").animate({
		scrollTop: contactMePosition.top}, "slow");
});

emailButton.on("click", function() {
	if(emailBox.is(":visible")) {
		emailBox.fadeOut(500);
	} else {
		emailBox.fadeIn(2000);
	};
});

/*-------------------------------------------*/
/*-------------------------------------------*/
/*-------------------------------------------*/



/*--------Arrow Down Event Handler ----------*/

arrowDown.on("click", function() {
	var position = myStorySection.offset();
	$("html, body").animate({
		scrollTop: position.top}, "slow");
});


/*-------------------------------------------*/
/*--------Navbar Show Function---------------*/
/*-------------------------------------------*/


$(document).ready(function(){
	// fade in .navbar
    $(window).scroll(function () {
        // set distance user needs to scroll before we start fadeIn
        if ($(this).scrollTop() > myStoryBottom) {
            $('.navbar').fadeIn();
        } else {
            $('.navbar').fadeOut();
        }
    });
});



/*-------------------------------------------*/
/*-------------------------------------------*/
/*-------------------------------------------*/
