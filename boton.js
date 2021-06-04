function irarriba(pxpantalla){
    window.addEventListener('scroll',() => {
        var scroll = document.documentElement.scrollTop;
        //probando el scroll
        //console.log(scroll);
        var botonarriba = document.getElementById('botonarriba');

        if(scroll > pxpantalla ){
            botonarriba.style.right= 20+"px";
            

        } else {
            botonarriba.style.right= -100+"px";
        }
    })
}
irarriba(400); 