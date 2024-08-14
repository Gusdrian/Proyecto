/*windows 7*/
let w7_pro = 1;
let w7_ram = 1;
let w7_alm = 16;
let w7_resl = 800;
let w7_resa = 600;

/*windows 8.1*/
let w8_pro = 1;
let w8_ram = 2;
let w8_alm = 20;
let w8_resl = 800;
let w8_resa = 600;

/*windows 10*/
let w10_pro = 1;
let w10_ram = 2;
let w10_alm = 20;
let w10_resl = 800;
let w10_resa = 600;

/*windows 11*/
let w11_pro = 2;
let w11_ram = 4;
let w11_alm = 64;
let w11_resl = 800;
let w11_resa = 600;

/*debian*/
let db_pro = 1;
let db_ram = 1;
let db_alm = 10;
let db_resl = 800;
let db_resa = 600;

/*ubuntu*/
let ub_pro = 2;
let ub_ram = 4;
let ub_alm = 25;
let ub_resl = 800;
let ub_resa = 600;

/*mint*/
let mn_pro = 2;
let mn_ram = 1;
let mn_alm = 15;
let mn_resl = 800;
let mn_resa = 600;

/*red hat*/
let rh_pro = 2;
let rh_ram = 2;
let rh_alm = 12;
let rh_resl = 800;
let rh_resa = 600;

/* MACos */
let mc_pro = 4;
let mc_ram = 4;
let mc_alm = 35.5;
let mc_resl = 800;
let mc_resa = 600;

/*datos*/
let pro
let ram
let alm
let gra
let mar

/*logeo */
function log(){
    let email= document.getElementById("tb_email").value
    let password= document.getElementById("tb_pass").value

    /* comprobacion
    if((email == "gus")&&(password == "010906"))
        {
    window.location.href="inicio.html"
        }
    else{
        alert("El correo o la contraseña son incorrectos")
    }
    */
   
     window.location.href="inicio.html"
}

function mt(){
    window.location.href="mt.html"
}
function os(){
    window.location.href="os.html"
}

function guar(){
    let pro=document.getElementById("pro").value
    let ram=document.getElementById("ram").value
    let alm=document.getElementById("alm").value
    let gra=document.getElementById("resa").value
    let mar=document.getElementById("resl").value
    let comn=document.getElementById("comt").value
    
    alert("fue guardado exitosamente")
}
function w11(){
    let pro= document.getElementById("pro").value
    let ram= document.getElementById("ram").value
    let alm= document.getElementById("alm").value
    let resa= document.getElementById("resa").value
    let resl= document.getElementById("resl").value

    /*microprocesador*/
    if(parseFloat(pro) < w11_pro)
        {
              document.getElementById("ans_pro").value="De manera deficiente"
        }
    else if ((parseFloat(pro) >=  w11_pro)&&(parseFloat(pro) <= (w11_pro+2)))
        {
              document.getElementById("ans_pro").value="Al minimo"
        }
    else if (parseFloat(pro) > (w11_pro+2))
        {
              document.getElementById("ans_pro").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del micro procesador")
        }

    /*ram*/
        if(parseFloat(ram) < w11_ram)
            {
                  document.getElementById("ans_ram").value="De manera deficiente"
            }
        else if ((parseFloat(ram) >=  w11_ram)&&(parseFloat(ram) <= (w11_ram+1)))
            {
                  document.getElementById("ans_ram").value="Al minimo"
            }
        else if (parseFloat(ram) > (w11_ram+1))
            {
                  document.getElementById("ans_ram").value="Correctamente"
            }
        else
            {
                alert("ingrese los datos de la RAM")
            }
    /*almacenamiento*/
    if(parseFloat(alm) < w11_alm)
        {
              document.getElementById("ans_alm").value="De manera deficiente"
        }
    else if ((parseFloat(alm) >=  w11_alm)&&(parseFloat(alm) <= (w11_alm+30)))
        {
              document.getElementById("ans_alm").value="Al minimo"
        }
    else if (parseFloat(alm) > (w11_alm+30))
        {
              document.getElementById("ans_alm").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del almacenamiento")
        }

    /*resolucion del ancho y alto**/
    if((parseFloat(resa) < w11_resa)||(parseFloat(resl) < w11_resl))
        {
              document.getElementById("ans_resal").value="incorrectamente"
        }
    else if ((parseFloat(resa) >= (w11_resa))&&(parseFloat(resl) >= w11_resl))
        {
              document.getElementById("ans_resal").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del ancho y el alto del monitor")
        }
    
    /*veredicto*/
    let ans_pro=document.getElementById("ans_pro").value
    let ans_ram=document.getElementById("ans_ram").value
    let ans_alm=document.getElementById("ans_alm").value
    let ans_resal=document.getElementById("ans_resal").value

        if((ans_pro == "De manera deficiente")||(ans_ram == "De manera deficiente")||(ans_alm == "De manera deficiente")||(ans_resal == "incorrectamente"))  
        {
            document.getElementById("ans_ver").value="El equipo no es apto para el sistema operativo"
        }
        else if((ans_pro == "Al minimo")||(ans_ram == "Al minimo")||(ans_alm == "Al minimo"))  
            {
                document.getElementById("ans_ver").value="No es recomendado, el equipo trabajara lentamente con el sistema operativo"
            }
        else if((ans_pro == "Correctamente")&&(ans_ram == "Correctamente")&&(ans_alm == "Correctamente"))  
                {
                    document.getElementById("ans_ver").value="El equipo es adecuado para el sistema operativo"
                }
}

function w10(){
    let pro= document.getElementById("pro").value
    let ram= document.getElementById("ram").value
    let alm= document.getElementById("alm").value
    let resa= document.getElementById("resa").value
    let resl= document.getElementById("resl").value

    /*microprocesador*/
    if(parseFloat(pro) < w10_pro)
        {
              document.getElementById("ans_pro").value="De manera deficiente"
        }
    else if ((parseFloat(pro) >=  w10_pro)&&(parseFloat(pro) <= (w10_pro+2)))
        {
              document.getElementById("ans_pro").value="Al minimo"
        }
    else if (parseFloat(pro) > (w10_pro+2))
        {
              document.getElementById("ans_pro").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del micro procesador")
        }

    /*ram*/
        if(parseFloat(ram) < w10_ram)
            {
                  document.getElementById("ans_ram").value="De manera deficiente"
            }
        else if ((parseFloat(ram) >=  w10_ram)&&(parseFloat(ram) <= (w10_ram+1)))
            {
                  document.getElementById("ans_ram").value="Al minimo"
            }
        else if (parseFloat(ram) > (w10_ram+1))
            {
                  document.getElementById("ans_ram").value="Correctamente"
            }
        else
            {
                alert("ingrese los datos de la RAM")
            }
    /*almacenamiento*/
    if(parseFloat(alm) < w10_alm)
        {
              document.getElementById("ans_alm").value="De manera deficiente"
        }
    else if ((parseFloat(alm) >=  w10_alm)&&(parseFloat(alm) <= (w10_alm+30)))
        {
              document.getElementById("ans_alm").value="Al minimo"
        }
    else if (parseFloat(alm) > (w10_alm+30))
        {
              document.getElementById("ans_alm").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del almacenamiento")
        }

    /*resolucion del ancho y alto**/
    if((parseFloat(resa) < w10_resa)||(parseFloat(resl) < w10_resl))
        {
              document.getElementById("ans_resal").value="incorrectamente"
        }
    else if ((parseFloat(resa) >= (w10_resa))&&(parseFloat(resl) >= w10_resl))
        {
              document.getElementById("ans_resal").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del ancho y el alto del monitor")
        }
    
    /*veredicto*/
    let ans_pro=document.getElementById("ans_pro").value
    let ans_ram=document.getElementById("ans_ram").value
    let ans_alm=document.getElementById("ans_alm").value
    let ans_resal=document.getElementById("ans_resal").value

        if((ans_pro == "De manera deficiente")||(ans_ram == "De manera deficiente")||(ans_alm == "De manera deficiente")||(ans_resal == "incorrectamente"))  
        {
            document.getElementById("ans_ver").value="El equipo no es apto para el sistema operativo"
        }
        else if((ans_pro == "Al minimo")||(ans_ram == "Al minimo")||(ans_alm == "Al minimo"))  
            {
                document.getElementById("ans_ver").value="No es recomendado, el equipo trabajara lentamente con el sistema operativo"
            }
        else if((ans_pro == "Correctamente")&&(ans_ram == "Correctamente")&&(ans_alm == "Correctamente"))  
                {
                    document.getElementById("ans_ver").value="El equipo es adecuado para el sistema operativo"
                }
}
function w8(){
    let pro= document.getElementById("pro").value
    let ram= document.getElementById("ram").value
    let alm= document.getElementById("alm").value
    let resa= document.getElementById("resa").value
    let resl= document.getElementById("resl").value

    /*microprocesador*/
    if(parseFloat(pro) < w8_pro)
        {
              document.getElementById("ans_pro").value="De manera deficiente"
        }
    else if ((parseFloat(pro) >=  w8_pro)&&(parseFloat(pro) <= (w8_pro+2)))
        {
              document.getElementById("ans_pro").value="Al minimo"
        }
    else if (parseFloat(pro) > (w8_pro+2))
        {
              document.getElementById("ans_pro").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del micro procesador")
        }

    /*ram*/
        if(parseFloat(ram) < w8_ram)
            {
                  document.getElementById("ans_ram").value="De manera deficiente"
            }
        else if ((parseFloat(ram) >=  w8_ram)&&(parseFloat(ram) <= (w_ram+1)))
            {
                  document.getElementById("ans_ram").value="Al minimo"
            }
        else if (parseFloat(ram) > (w8_ram+1))
            {
                  document.getElementById("ans_ram").value="Correctamente"
            }
        else
            {
                alert("ingrese los datos de la RAM")
            }
    /*almacenamiento*/
    if(parseFloat(alm) < w8_alm)
        {
              document.getElementById("ans_alm").value="De manera deficiente"
        }
    else if ((parseFloat(alm) >=  w8_alm)&&(parseFloat(alm) <= (w8_alm+30)))
        {
              document.getElementById("ans_alm").value="Al minimo"
        }
    else if (parseFloat(alm) > (w8_alm+30))
        {
              document.getElementById("ans_alm").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del almacenamiento")
        }

    /*resolucion del ancho y alto**/
    if((parseFloat(resa) < w8_resa)||(parseFloat(resl) < w8_resl))
        {
              document.getElementById("ans_resal").value="incorrectamente"
        }
    else if ((parseFloat(resa) >= (w8_resa))&&(parseFloat(resl) >= w8_resl))
        {
              document.getElementById("ans_resal").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del ancho y el alto del monitor")
        }
    
    /*veredicto*/
    let ans_pro=document.getElementById("ans_pro").value
    let ans_ram=document.getElementById("ans_ram").value
    let ans_alm=document.getElementById("ans_alm").value
    let ans_resal=document.getElementById("ans_resal").value

        if((ans_pro == "De manera deficiente")||(ans_ram == "De manera deficiente")||(ans_alm == "De manera deficiente")||(ans_resal == "incorrectamente"))  
        {
            document.getElementById("ans_ver").value="El equipo no es apto para el sistema operativo"
        }
        else if((ans_pro == "Al minimo")||(ans_ram == "Al minimo")||(ans_alm == "Al minimo"))  
            {
                document.getElementById("ans_ver").value="No es recomendado, el equipo trabajara lentamente con el sistema operativo"
            }
        else if((ans_pro == "Correctamente")&&(ans_ram == "Correctamente")&&(ans_alm == "Correctamente"))  
                {
                    document.getElementById("ans_ver").value="El equipo es adecuado para el sistema operativo"
                }
}
function w7(){
    let pro= document.getElementById("pro").value
    let ram= document.getElementById("ram").value
    let alm= document.getElementById("alm").value
    let resa= document.getElementById("resa").value
    let resl= document.getElementById("resl").value

    /*microprocesador*/
    if(parseFloat(pro) < w7_pro)
        {
              document.getElementById("ans_pro").value="De manera deficiente"
        }
    else if ((parseFloat(pro) >=  w7_pro)&&(parseFloat(pro) <= (w7_pro+2)))
        {
              document.getElementById("ans_pro").value="Al minimo"
        }
    else if (parseFloat(pro) > (w7_pro+2))
        {
              document.getElementById("ans_pro").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del micro procesador")
        }

    /*ram*/
        if(parseFloat(ram) < w7_ram)
            {
                  document.getElementById("ans_ram").value="De manera deficiente"
            }
        else if ((parseFloat(ram) >=  w7_ram)&&(parseFloat(ram) <= (w7_ram+1)))
            {
                  document.getElementById("ans_ram").value="Al minimo"
            }
        else if (parseFloat(ram) > (w7_ram+1))
            {
                  document.getElementById("ans_ram").value="Correctamente"
            }
        else
            {
                alert("ingrese los datos de la RAM")
            }
    /*almacenamiento*/
    if(parseFloat(alm) < w7_alm)
        {
              document.getElementById("ans_alm").value="De manera deficiente"
        }
    else if ((parseFloat(alm) >=  w7_alm)&&(parseFloat(alm) <= (w7_alm+30)))
        {
              document.getElementById("ans_alm").value="Al minimo"
        }
    else if (parseFloat(alm) > (w7_alm+30))
        {
              document.getElementById("ans_alm").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del almacenamiento")
        }

    /*resolucion del ancho y alto**/
    if((parseFloat(resa) < w7_resa)||(parseFloat(resl) < w7_resl))
        {
              document.getElementById("ans_resal").value="incorrectamente"
        }
    else if ((parseFloat(resa) >= (w7_resa))&&(parseFloat(resl) >= w7_resl))
        {
              document.getElementById("ans_resal").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del ancho y el alto del monitor")
        }
    
    /*veredicto*/
    let ans_pro=document.getElementById("ans_pro").value
    let ans_ram=document.getElementById("ans_ram").value
    let ans_alm=document.getElementById("ans_alm").value
    let ans_resal=document.getElementById("ans_resal").value

        if((ans_pro == "De manera deficiente")||(ans_ram == "De manera deficiente")||(ans_alm == "De manera deficiente")||(ans_resal == "incorrectamente"))  
        {
            document.getElementById("ans_ver").value="El equipo no es apto para el sistema operativo"
        }
        else if((ans_pro == "Al minimo")||(ans_ram == "Al minimo")||(ans_alm == "Al minimo"))  
            {
                document.getElementById("ans_ver").value="No es recomendado, el equipo trabajara lentamente con el sistema operativo"
            }
        else if((ans_pro == "Correctamente")&&(ans_ram == "Correctamente")&&(ans_alm == "Correctamente"))  
                {
                    document.getElementById("ans_ver").value="El equipo es adecuado para el sistema operativo"
                }
}
function db(){
    let pro= document.getElementById("pro").value
    let ram= document.getElementById("ram").value
    let alm= document.getElementById("alm").value
    let resa= document.getElementById("resa").value
    let resl= document.getElementById("resl").value

    /*microprocesador*/
    if(parseFloat(pro) < db_pro)
        {
              document.getElementById("ans_pro").value="De manera deficiente"
        }
    else if ((parseFloat(pro) >=  db_pro)&&(parseFloat(pro) <= (db_pro+2)))
        {
              document.getElementById("ans_pro").value="Al minimo"
        }
    else if (parseFloat(pro) > (db_pro+2))
        {
              document.getElementById("ans_pro").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del micro procesador")
        }

    /*ram*/
        if(parseFloat(ram) < db_ram)
            {
                  document.getElementById("ans_ram").value="De manera deficiente"
            }
        else if ((parseFloat(ram) >=  db_ram)&&(parseFloat(ram) <= (db_ram+1)))
            {
                  document.getElementById("ans_ram").value="Al minimo"
            }
        else if (parseFloat(ram) > (db_ram+1))
            {
                  document.getElementById("ans_ram").value="Correctamente"
            }
        else
            {
                alert("ingrese los datos de la RAM")
            }
    /*almacenamiento*/
    if(parseFloat(alm) < db_alm)
        {
              document.getElementById("ans_alm").value="De manera deficiente"
        }
    else if ((parseFloat(alm) >=  db_alm)&&(parseFloat(alm) <= (db_alm+30)))
        {
              document.getElementById("ans_alm").value="Al minimo"
        }
    else if (parseFloat(alm) > (db_alm+30))
        {
              document.getElementById("ans_alm").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del almacenamiento")
        }

    /*resolucion del ancho y alto**/
    if((parseFloat(resa) < db_resa)||(parseFloat(resl) < db_resl))
        {
              document.getElementById("ans_resal").value="incorrectamente"
        }
    else if ((parseFloat(resa) >= (db_resa))&&(parseFloat(resl) >= db_resl))
        {
              document.getElementById("ans_resal").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del ancho y el alto del monitor")
        }
    
    /*veredicto*/
    let ans_pro=document.getElementById("ans_pro").value
    let ans_ram=document.getElementById("ans_ram").value
    let ans_alm=document.getElementById("ans_alm").value
    let ans_resal=document.getElementById("ans_resal").value

        if((ans_pro == "De manera deficiente")||(ans_ram == "De manera deficiente")||(ans_alm == "De manera deficiente")||(ans_resal == "incorrectamente"))  
        {
            document.getElementById("ans_ver").value="El equipo no es apto para el sistema operativo"
        }
        else if((ans_pro == "Al minimo")||(ans_ram == "Al minimo")||(ans_alm == "Al minimo"))  
            {
                document.getElementById("ans_ver").value="No es recomendado, el equipo trabajara lentamente con el sistema operativo"
            }
        else if((ans_pro == "Correctamente")&&(ans_ram == "Correctamente")&&(ans_alm == "Correctamente"))  
                {
                    document.getElementById("ans_ver").value="El equipo es adecuado para el sistema operativo"
                }
}
function ub(){
    let pro= document.getElementById("pro").value
    let ram= document.getElementById("ram").value
    let alm= document.getElementById("alm").value
    let resa= document.getElementById("resa").value
    let resl= document.getElementById("resl").value

    /*microprocesador*/
    if(parseFloat(pro) < ub_pro)
        {
              document.getElementById("ans_pro").value="De manera deficiente"
        }
    else if ((parseFloat(pro) >=  ub_pro)&&(parseFloat(pro) <= (ub_pro+2)))
        {
              document.getElementById("ans_pro").value="Al minimo"
        }
    else if (parseFloat(pro) > (ub_pro+2))
        {
              document.getElementById("ans_pro").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del micro procesador")
        }

    /*ram*/
        if(parseFloat(ram) < ub_ram)
            {
                  document.getElementById("ans_ram").value="De manera deficiente"
            }
        else if ((parseFloat(ram) >=  ub_ram)&&(parseFloat(ram) <= (ub_ram+1)))
            {
                  document.getElementById("ans_ram").value="Al minimo"
            }
        else if (parseFloat(ram) > (ub_ram+1))
            {
                  document.getElementById("ans_ram").value="Correctamente"
            }
        else
            {
                alert("ingrese los datos de la RAM")
            }
    /*almacenamiento*/
    if(parseFloat(alm) < ub_alm)
        {
              document.getElementById("ans_alm").value="De manera deficiente"
        }
    else if ((parseFloat(alm) >=  ub_alm)&&(parseFloat(alm) <= (ub_alm+30)))
        {
              document.getElementById("ans_alm").value="Al minimo"
        }
    else if (parseFloat(alm) > (ub_alm+30))
        {
              document.getElementById("ans_alm").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del almacenamiento")
        }

    /*resolucion del ancho y alto**/
    if((parseFloat(resa) < ub_resa)||(parseFloat(resl) < ub_resl))
        {
              document.getElementById("ans_resal").value="incorrectamente"
        }
    else if ((parseFloat(resa) >= (ub_resa))&&(parseFloat(resl) >= ub_resl))
        {
              document.getElementById("ans_resal").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del ancho y el alto del monitor")
        }
    
    /*veredicto*/
    let ans_pro=document.getElementById("ans_pro").value
    let ans_ram=document.getElementById("ans_ram").value
    let ans_alm=document.getElementById("ans_alm").value
    let ans_resal=document.getElementById("ans_resal").value

        if((ans_pro == "De manera deficiente")||(ans_ram == "De manera deficiente")||(ans_alm == "De manera deficiente")||(ans_resal == "incorrectamente"))  
        {
            document.getElementById("ans_ver").value="El equipo no es apto para el sistema operativo"
        }
        else if((ans_pro == "Al minimo")||(ans_ram == "Al minimo")||(ans_alm == "Al minimo"))  
            {
                document.getElementById("ans_ver").value="No es recomendado, el equipo trabajara lentamente con el sistema operativo"
            }
        else if((ans_pro == "Correctamente")&&(ans_ram == "Correctamente")&&(ans_alm == "Correctamente"))  
                {
                    document.getElementById("ans_ver").value="El equipo es adecuado para el sistema operativo"
                }
}
function mn(){
    let pro= document.getElementById("pro").value
    let ram= document.getElementById("ram").value
    let alm= document.getElementById("alm").value
    let resa= document.getElementById("resa").value
    let resl= document.getElementById("resl").value

    /*microprocesador*/
    if(parseFloat(pro) < mn_pro)
        {
              document.getElementById("ans_pro").value="De manera deficiente"
        }
    else if ((parseFloat(pro) >=  mn_pro)&&(parseFloat(pro) <= (mn_pro+2)))
        {
              document.getElementById("ans_pro").value="Al minimo"
        }
    else if (parseFloat(pro) > (mn_pro+2))
        {
              document.getElementById("ans_pro").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del micro procesador")
        }

    /*ram*/
        if(parseFloat(ram) < mn_ram)
            {
                  document.getElementById("ans_ram").value="De manera deficiente"
            }
        else if ((parseFloat(ram) >=  mn_ram)&&(parseFloat(ram) <= (mn_ram+1)))
            {
                  document.getElementById("ans_ram").value="Al minimo"
            }
        else if (parseFloat(ram) > (mn_ram+1))
            {
                  document.getElementById("ans_ram").value="Correctamente"
            }
        else
            {
                alert("ingrese los datos de la RAM")
            }
    /*almacenamiento*/
    if(parseFloat(alm) < mn_alm)
        {
              document.getElementById("ans_alm").value="De manera deficiente"
        }
    else if ((parseFloat(alm) >=  mn_alm)&&(parseFloat(alm) <= (mn_alm+30)))
        {
              document.getElementById("ans_alm").value="Al minimo"
        }
    else if (parseFloat(alm) > (mn_alm+30))
        {
              document.getElementById("ans_alm").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del almacenamiento")
        }

    /*resolucion del ancho y alto**/
    if((parseFloat(resa) < mn_resa)||(parseFloat(resl) < mn_resl))
        {
              document.getElementById("ans_resal").value="incorrectamente"
        }
    else if ((parseFloat(resa) >= (mn_resa))&&(parseFloat(resl) >= mn_resl))
        {
              document.getElementById("ans_resal").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del ancho y el alto del monitor")
        }
    
    /*veredicto*/
    let ans_pro=document.getElementById("ans_pro").value
    let ans_ram=document.getElementById("ans_ram").value
    let ans_alm=document.getElementById("ans_alm").value
    let ans_resal=document.getElementById("ans_resal").value

        if((ans_pro == "De manera deficiente")||(ans_ram == "De manera deficiente")||(ans_alm == "De manera deficiente")||(ans_resal == "incorrectamente"))  
        {
            document.getElementById("ans_ver").value="El equipo no es apto para el sistema operativo"
        }
        else if((ans_pro == "Al minimo")||(ans_ram == "Al minimo")||(ans_alm == "Al minimo"))  
            {
                document.getElementById("ans_ver").value="No es recomendado, el equipo trabajara lentamente con el sistema operativo"
            }
        else if((ans_pro == "Correctamente")&&(ans_ram == "Correctamente")&&(ans_alm == "Correctamente"))  
                {
                    document.getElementById("ans_ver").value="El equipo es adecuado para el sistema operativo"
                }
}
function rh(){
    let pro= document.getElementById("pro").value
    let ram= document.getElementById("ram").value
    let alm= document.getElementById("alm").value
    let resa= document.getElementById("resa").value
    let resl= document.getElementById("resl").value

    /*microprocesador*/
    if(parseFloat(pro) < rh_pro)
        {
              document.getElementById("ans_pro").value="De manera deficiente"
        }
    else if ((parseFloat(pro) >=  rh_pro)&&(parseFloat(pro) <= (rh_pro+2)))
        {
              document.getElementById("ans_pro").value="Al minimo"
        }
    else if (parseFloat(pro) > (rh_pro+2))
        {
              document.getElementById("ans_pro").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del micro procesador")
        }

    /*ram*/
        if(parseFloat(ram) < rh_ram)
            {
                  document.getElementById("ans_ram").value="De manera deficiente"
            }
        else if ((parseFloat(ram) >=  rh_ram)&&(parseFloat(ram) <= (rh_ram+1)))
            {
                  document.getElementById("ans_ram").value="Al minimo"
            }
        else if (parseFloat(ram) > (rh_ram+1))
            {
                  document.getElementById("ans_ram").value="Correctamente"
            }
        else
            {
                alert("ingrese los datos de la RAM")
            }
    /*almacenamiento*/
    if(parseFloat(alm) < rh_alm)
        {
              document.getElementById("ans_alm").value="De manera deficiente"
        }
    else if ((parseFloat(alm) >=  rh_alm)&&(parseFloat(alm) <= (rh_alm+30)))
        {
              document.getElementById("ans_alm").value="Al minimo"
        }
    else if (parseFloat(alm) > (rh_alm+30))
        {
              document.getElementById("ans_alm").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del almacenamiento")
        }

    /*resolucion del ancho y alto**/
    if((parseFloat(resa) < rh_resa)||(parseFloat(resl) < rh_resl))
        {
              document.getElementById("ans_resal").value="incorrectamente"
        }
    else if ((parseFloat(resa) >= (rh_resa))&&(parseFloat(resl) >= rh_resl))
        {
              document.getElementById("ans_resal").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del ancho y el alto del monitor")
        }
    
    /*veredicto*/
    let ans_pro=document.getElementById("ans_pro").value
    let ans_ram=document.getElementById("ans_ram").value
    let ans_alm=document.getElementById("ans_alm").value
    let ans_resal=document.getElementById("ans_resal").value

        if((ans_pro == "De manera deficiente")||(ans_ram == "De manera deficiente")||(ans_alm == "De manera deficiente")||(ans_resal == "incorrectamente"))  
        {
            document.getElementById("ans_ver").value="El equipo no es apto para el sistema operativo"
        }
        else if((ans_pro == "Al minimo")||(ans_ram == "Al minimo")||(ans_alm == "Al minimo"))  
            {
                document.getElementById("ans_ver").value="No es recomendado, el equipo trabajara lentamente con el sistema operativo"
            }
        else if((ans_pro == "Correctamente")&&(ans_ram == "Correctamente")&&(ans_alm == "Correctamente"))  
                {
                    document.getElementById("ans_ver").value="El equipo es adecuado para el sistema operativo"
                }
}
function mc(){
    let pro= document.getElementById("pro").value
    let ram= document.getElementById("ram").value
    let alm= document.getElementById("alm").value
    let resa= document.getElementById("resa").value
    let resl= document.getElementById("resl").value

    /*microprocesador*/
    if(parseFloat(pro) < mc_pro)
        {
              document.getElementById("ans_pro").value="De manera deficiente"
        }
    else if ((parseFloat(pro) >=  mc_pro)&&(parseFloat(pro) <= (mc_pro+2)))
        {
              document.getElementById("ans_pro").value="Al minimo"
        }
    else if (parseFloat(pro) > (mc_pro+2))
        {
              document.getElementById("ans_pro").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del micro procesador")
        }

    /*ram*/
        if(parseFloat(ram) < mc_ram)
            {
                  document.getElementById("ans_ram").value="De manera deficiente"
            }
        else if ((parseFloat(ram) >=  mc_ram)&&(parseFloat(ram) <= (mc_ram+1)))
            {
                  document.getElementById("ans_ram").value="Al minimo"
            }
        else if (parseFloat(ram) > (mc_ram+1))
            {
                  document.getElementById("ans_ram").value="Correctamente"
            }
        else
            {
                alert("ingrese los datos de la RAM")
            }
    /*almacenamiento*/
    if(parseFloat(alm) < mc_alm)
        {
              document.getElementById("ans_alm").value="De manera deficiente"
        }
    else if ((parseFloat(alm) >=  mc_alm)&&(parseFloat(alm) <= (mc_alm+30)))
        {
              document.getElementById("ans_alm").value="Al minimo"
        }
    else if (parseFloat(alm) > (mc_alm+30))
        {
              document.getElementById("ans_alm").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del almacenamiento")
        }

    /*resolucion del ancho y alto**/
    if((parseFloat(resa) < mc_resa)||(parseFloat(resl) < mc_resl))
        {
              document.getElementById("ans_resal").value="incorrectamente"
        }
    else if ((parseFloat(resa) >= (mc_resa))&&(parseFloat(resl) >= mc_resl))
        {
              document.getElementById("ans_resal").value="Correctamente"
        }
    else
        {
            alert("ingrese los datos del ancho y el alto del monitor")
        }
    
    /*veredicto*/
    let ans_pro=document.getElementById("ans_pro").value
    let ans_ram=document.getElementById("ans_ram").value
    let ans_alm=document.getElementById("ans_alm").value
    let ans_resal=document.getElementById("ans_resal").value

        if((ans_pro == "De manera deficiente")||(ans_ram == "De manera deficiente")||(ans_alm == "De manera deficiente")||(ans_resal == "incorrectamente"))  
        {
            document.getElementById("ans_ver").value="El equipo no es apto para el sistema operativo"
        }
        else if((ans_pro == "Al minimo")||(ans_ram == "Al minimo")||(ans_alm == "Al minimo"))  
            {
                document.getElementById("ans_ver").value="No es recomendado, el equipo trabajara lentamente con el sistema operativo"
            }
        else if((ans_pro == "Correctamente")&&(ans_ram == "Correctamente")&&(ans_alm == "Correctamente"))  
                {
                    document.getElementById("ans_ver").value="El equipo es adecuado para el sistema operativo"
                }
}


