<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<script src="js/thumbNail.min.js"></script>
<link rel="stylesheet" href="css/thumbNail.min.css">

<style type="text/css">
#thumb {
	margin: 0 auto;
	width: 600px;
	height: 400px;
}
</style>

<script type="text/javascript">
$(document).ready(function(e) {
	$('#thumb').thumbNail({column:5});			
});
</script>

<div id="thumb" class="thumb">
    <a style="background-image: url('imgs/1.jpg')"></a>
    <a style="background-image: url('imgs/2.jpg')"></a>
    <a style="background-image: url('imgs/3.jpg')"></a>
    <a style="background-image: url('imgs/4.jpg')"></a>
    <a style="background-image: url('imgs/5.jpg')"></a>
    <a style="background-image: url('imgs/6.jpg')"></a>
    <a style="background-image: url('imgs/7.jpg')"></a>
    <a style="background-image: url('imgs/8.jpg')"></a>
    <a style="background-image: url('imgs/9.jpg')"></a>
    <a style="background-image: url('imgs/10.jpg')"></a>
</div>
