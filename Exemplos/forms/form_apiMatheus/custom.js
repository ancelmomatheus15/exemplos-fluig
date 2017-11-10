$.ajax({
	async:false,
	contentType: "application/json",
	type:"get",
	dataType:"json",
	url:'/api/public/ecm/document/listDocument/0',
	success: function(data){
		$.each(data.content,function(k,v){
			console.log(v.description);
			$("#LISTA_PASTAS").append('<option value="'+v.id+'">'+v.description+'</option>')
		})
	}
})

function carregaApi(idPasta){
	$(".pastas").remove();
	console.log(idPasta);
	if(idPasta!=""){
		$.ajax({
			async:false,
		contentType: "application/json",
		type:"get",
		dataType:"json",
		url:'/api/public/ecm/document/listDocument/'+idPasta,
		success:function(data){
			$each(data.content,function(k,v){
				console.log(v.description);
				$("#LISTA_ARQUIVOS").append('<li style="cursor:pointer;" onclick="RemoverPasta('+v.id+')" class="list-group-item pastas">'+v.description+'</li>')
				
				if(v.type==1){
					$("#LISTA_SUB_PASTAS").append('<option value='+v.id+'>'+v.description+'</option>')
				}
				})
				$("LISTA_ARQUIVOS .active").html(data.content.length+ ' arquivos encontrados!')
		}
		})
	}
}