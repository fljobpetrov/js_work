
	$(function() {
		$("#my_list").collapsorz({
			minimum: 3
			, showText: "Развернуть список >>>"
			, hideText: "Свернуть список <<<"
		});
		
		$("#my_div").collapsorz({
			minimum: 3
			, showText: "Другие ссылки >>>"
			, hideText: "Скрыть <<<"
			, toggle: "a"
		});
	});
