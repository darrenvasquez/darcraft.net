  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="DarCraft - Status">
    <title>Minecraft Head Grabber</title>
      
    <link href="../bootstrap/css/bootstrap.css" rel="stylesheet">
	<link href="./heads.css" rel="stylesheet">

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
  </head>
<div class="container center-block">
    <br>
    <center><p class="lead">Minecraft Head Grabber by x128</p></center>
    <input type="text" class="form-control input-box center-block text-center" placeholder="Minecraft Username" id="username">
    <br>
    <img class="center-block" src="https://minotar.net/helm/x128/256.png" id="image">
    <br>
    <button type="button" class="btn btn-success btn-lg center-block" id="download">Download Head
  <span class="glyphicon glyphicon-save"></span>
</button>
    </div>
<script type="text/javascript">
    $('#download').on('click', function(event) {
        var txtbox = document.getElementById('username');
        var value = txtbox.value;
        if (value.length == 0) {
            value = 'x128';
        }
        var download = 'https://minotar.net/helm/' + value + '/300.png';
        
        var a = $("<a>").attr("href", download).attr("download", value + ".png").appendTo("body");

        a[0].click();

        a.remove();
    });
    $("#username").on("keyup", function() {
        var txtbox = document.getElementById('username');
        var button = document.getElementById('download');
        var img = document.getElementById('image');
        var value = txtbox.value;
        if (value.length > 0) {
            img.src = 'https://minotar.net/helm/' + value + '/256.png';
        } else {
            img.src = 'https://minotar.net/helm/x128/256.png';
        }
    });
</script>