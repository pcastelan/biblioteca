/*Configura a barra de pesquisa usando jquery e o autocomplete do jquery-ui*/

$( function() {
  $.widget( "custom.catcomplete", $.ui.autocomplete, {
    _create: function() {
      this._super();
      this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
    },
    _renderMenu: function( ul, items ) {
      var that = this,
        currentCategory = "";
      $.each( items, function( index, item ) {
        var li;
        if ( item.category != currentCategory ) {
          ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
          currentCategory = item.category;
        }
        li = that._renderItemData( ul, item );
        if ( item.category ) {
          li.attr( "aria-label", item.category + " : " + item.label ); 
        }
        if (item.lang != ""){//define linguagem segundo padrões de acessibilidade
          li.attr('lang', item.lang);
        }       
      });
    }
  });
  
  /*Função mostra os resultados independente de acentos*/
  var normalize = function( term ) {
    var ret = "";
    for ( var i = 0; i < term.length; i++ ) {
      ret += accentMap[ term.charAt(i) ] || term.charAt(i);
    }
    return ret;
  }
  var accentMap = {
    "á": "a",
    "à": "a",
    "ã": "a",
    "â": "a",
    "Á": "A",
    "À": "A",
    "Ã": "A",
    "Â": "A",
    "é": "e",
    "ê": "e",
    "É": "E",
    "Ê": "E",
    "í": "i",
    "î": "i",
    "Í": "I",
    "Î": "I",
    "ô": "o",
    "ó": "o",
    "õ": "o",
    "Ô": "O",
    "Ó": "O",
    "Õ": "O",
    "ú": "u",
    "û": "u",
    "Û": "U",
    "Ú": "U",
    "ç": "c",
    "Ç": "C",
    "$": "s",
    "$": "S",
    "@": "a",
    "@": "A",
    "ª": "a",
    "ª": "A",
    "º": "o",
    "º": "O"
  };
  
  
  var data = [
    { label: "Um", url:"#", category: "Lorem", lang: "" },
    { label: "Dois", url:"#", category: "Lorem", lang: "en" },
    { label: "Três", url:"#", category: "Lorem", lang: "" },
    { label: "Quatro", url:"#", category: "Ipsum", lang: "en" },
    { label: "Cinco", url:"#", category: "Ipsum", lang: "" },
    { label: "Seis", url:"#", category: "Ipsum", lang: "" }        
  ];
	$( "#acessoRapido" ).catcomplete({
		delay: 0,
		autoFocus: true,
		select: function(event, ui) { 
			$('#btn-acessoRapido').val(ui.item.url);
		},
		source: function( request, response ) {
			var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "i" );
			response($.grep(data, function(value) {
				return matcher.test(value.label) || matcher.test(normalize(value.label));
			}) 
			);
		}
	});	  
});
