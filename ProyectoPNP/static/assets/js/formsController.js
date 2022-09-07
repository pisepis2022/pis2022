
console.log("caraga correcta del controlador2")
let btnEliminacion = document.querySelectorAll(".btnEliminacion");


(function(){

        
    
    /* Function to show an alert to delets */
    console.log("llamando notificacion");

    btnEliminacion.forEach((btn)=>{
        console.log("se va a eliminar")
        btn.addEventListener("click", function(e){
            e.preventDefault();
            Swal.fire({
                title:"¿Confirma la eliminación del elemento?",
                text: "esta acción no se puede deshacer",
                showCancelButton:true,
                icon: "warning",
                confirmButtonText: "Sí, eliminar",
                cancelButtonText: "No, cancelar",
                confirmButtonColor: "#d33",
                backdrop: true,
                showLoaderOnConfirm: true,
                preConfirm:()=>{
                    //console.log("Redirigiendo hacia: "+this.href)
                    location.href = this.href
                },
                allowOutsideClick:()=>false,
                allowEscapeKey:()=>false,

            })
        })
    })
}
)();





