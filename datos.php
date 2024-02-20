<?php
   $valor_Secuencia=$_POST['valor'];
   $dato_Decimal=$_POST['dato_Decimal'];
     shell_exec("sudo python /var/www/html/Practicas/Examen/Secuencias.py ".$valor_Secuencia); 
?>