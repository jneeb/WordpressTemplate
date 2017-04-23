// $(document).ready(function () {
// 	$(".menuSelect").click(function () {
// 		$(".menuSelect").removeClass("active");
// 		$(this).addClass("active");
// 	});
// });
//
// $(document).ready(function () {
// 	$(".lunch").click(function () {
// 		$(".menuFade").fadeOut("slow");
// 		$(".lunchMenu").addClass("active");
// 	});
// });

$(document).ready(function () {
	$("#lunch").click(function () {
		$("#breakfastMenu").fadeOut(800);
		$("#lunchMenu").fadeIn(800);
	});
});
