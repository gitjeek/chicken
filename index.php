﻿<?php 
include "view/public/header.php"; 
?>

<link rel="stylesheet" href="public/bootstrap-3.3.7-dist/css/bootstrap.min.css">
<link rel="stylesheet" href="public/bootstrap-3.3.7-dist/css/bootstrap-theme.min.css">
<link rel="stylesheet" href="css/public/jquery.mobile-1.4.5.min.css">
<link rel="stylesheet" href="css/public/app.min.css">
<!-- 公共js库 -->
<script src="js/public/app.min.js"></script>
<script src="js/public/jquery-3.2.1.min.js"></script>
<script src="public/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<script src="js/public/zepto.js"></script>
<!-- <script src="js/public/jquery.mobile-1.4.5.min.js"></script> -->
<script src="js/public/public.js"></script>


<script src="js/index/searchRes.js"></script>

<?php
//包含各个页面的php
include "view/index/home.php";
include "view/index/page2.php";
include "view/index/complex-search.php";
include "view/index/searchRes.php";

?>


<script>
  try {
    App.restore();
} catch (err) {
    App.load('home');
}
</script>





<?php include "view/public/footer.php"; ?>