<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">

</head>
<body>
<div id="app">
    <Myheader></Myheader>
    <div class="container">
        <router-view></router-view>
    </div>
    <Myfooter></Myfooter>
</div>

<script src="{{asset('js/app.js')}}"></script>
</body>
</html>
<script>
    import Myfooter from "../js/components/Myfooter";

    export default {
        components: {Myfooter}
    }
</script>