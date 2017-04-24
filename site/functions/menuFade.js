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
		$("#breakfastMenu").fadeTo(800, 0);
		$("#lunchMenu").delay(400).fadeTo(800, 1);
	});
});
