$(document).ready(function(){
    $('#twitter').attr('href',"https://twitter.com/intent/tweet?text="+"Click New Quote button to get a quote.")
    $('#newquote').click(function(){
    var color=['#F64747','#663399','#4183D7','#22313F','#9A12B3','#03A678'];
    var index=color[Math.floor(Math.random()*color.length)];
	$.ajax({
			url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', 
			type: 'POST',
			data: {}, 
			dataType: 'json',
			success: function(data) { 
					    var quote=data.quote;
					    var author=data.author;
					    //console.log(data);
						$('.quote #data').html(quote);
						$('.quote h4').html("-"+author);
		          		$('body').css('background-color', index);
						$('.col').css('background-color', index);
						$('.socialmedia a').css('background-color', index);
		     			$('#newquote').css('color','white');
						$('.color').css('color', index); $('#twitter').attr('href',"https://twitter.com/intent/tweet?text="+quote+"   "+author);
					},
			error: function(err) { 
	      		   $('.quote #data').html("ops something went wrong."); 
	    	},
			beforeSend: function(xhr) {
					   xhr.setRequestHeader("X-Mashape-Authorization","xMWer8mFGpmshUTLZ5w6Xp6YCbxdp17Q7SxjsnZZE2qDjZqgrh");
			}
	    });
    });
});