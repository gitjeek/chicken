<?php 
include "view/public/header.php"; 
?>

<!-- 公共js库 -->
<script src="js/public/app.min.js"></script>
<script src="js/public/jquery-3.2.1.min.js"></script>
<script src="public/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<script src="js/public/zepto.js"></script>
<!-- <script src="js/public/jquery.mobile-1.4.5.min.js"></script> -->

<script src="js/index/index.js"></script>
<!-- 包含各个页面的js -->
<script src="js/index/page2.js"></script>

<?php
//包含各个页面的php
include "view/index/home.php";
include "view/index/page2.php";
?>

<script>
  try {
    App.restore();
} catch (err) {
    App.load('home');
}
</script>





<?php include "view/public/footer.php"; ?>