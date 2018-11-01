function randomQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#text,#author").fadeOut(200,function(){
          $(this).fadeIn(20,function(){
            $("#text").text( response.quoteText );
            $("#author").text( "- " + response.quoteAuthor );
            $(".twitter").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
              ' - ' + response.quoteAuthor);
          });
        });
      }
  });
}



$(".next").click(function(){
  randomQuote();
});