// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .

$(document).ready(function() {
	$("#url").keyup(function(){
    var url = $(this).val().trim();
    if (isValidURL(url)) {
      xhr = $.ajax({
        url: "/link_extractor",
        data: "url="+url,
        type: "POST",
        cache: false
      });
    } else 
    {
    	$("#link_image").attr('src','assets/warning.gif');
    	console.log($("#link_image"));
			$('#atc_desc').html('');
			$('#atc_url').attr('href','').html('');
    	$('#title').html("URL is invalid.");
    }
  });
});

function isValidURL(url) {
  var RegExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

  if(RegExp.test(url)){
    return true;
  } else {
    return false;
  }
}