function eliminar(id) {
	Swal.fire({
		  title: '¿Estás seguro?',
		  text: "¡No podrás revertir esto!",
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Si, eliminar!'
		}).then((result) => {
		  if (result.value) {
			  $.ajax({
				 url:"/eliminar/"+id,
				 success: function(res) {
					 
				 }
			  });
		    Swal.fire(
		      '¡Eliminado!',
		      'Su registro ha sido eliminado.',
		      'success'
		    ).then((result)=>{
		    	if(result.value){
		    		location.href="/listar";
		    	}
		    })
		  }
		})
}