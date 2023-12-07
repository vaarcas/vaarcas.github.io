var svgIcons = `\
<svg style="position: absolute; width: 0; height: 0;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<defs>
	<svg id="icon_quotes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path d="M12 15H6.11A9 9 0 0 1 10 8.86l1.79-1.2L10.69 6 8.9 7.2A11 11 0 0 0 4 16.35V23a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2ZM26 15h-5.89A9 9 0 0 1 24 8.86l1.79-1.2L24.7 6l-1.8 1.2a11 11 0 0 0-4.9 9.15V23a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Z"/>
  <path d="M0 0h32v32H0z" data-name="&lt;Transparent Rectangle&gt;" style="fill:none"/>
</svg>
	</defs> 
</svg>
`
$(document).ready(function () {
	$("body").prepend(svgIcons);
});