<?php

header('Access-Control-Allow-Origin:*');
echo file_get_contents("https://hacker234:CeP7pMrZ3rQ@distribution-xml.booking.com/json/" . $_GET["url"]);

?>