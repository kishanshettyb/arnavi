$(document).ready(function () {
	var limit = 5;
	var load = 0;

	setTimeout(function () {
		loadVideos(limit, load);
	}, 1000);

	$("#load-more").on("click", function () {
		limit += 5;
		load += 5;
		loadVideos(limit, load);
	});
});
function loadVideos(limit, load) {
	$.ajax({
		url: "../../videos.json",
		type: "GET",
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		success: function (data) {
			$("#spinner").addClass("hide");
			$("#load-more").removeClass("hide");
			var formData = JSON.stringify(data);
			for (let i = load; i <= limit; i++) {
				var url = data["videos"][i]["url"];
				var title = data["videos"][i]["title"];
				console.log(limit, load);
				$(document)
					.find(".Gallery")
					.append(
						`
					<span>
				    <iframe width="350" height="300"
						src="` +
							url +
							`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				    <p>` +
							title +
							`</p>
				  </span>
				`
					);
				if (limit >= data["videos"].length) {
					$("#load-more").addClass("hide");
				}
			}
		}
	});
}
