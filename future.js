$(document).ready(function(){

  $('#the-future, #child-future').fadeTo(4000, .9, "swing");

  $('#the-future').delay(1000).fadeOut('slow', function(){
      $('#only-thing').fadeTo('slow', .9, "swing", function(){
          $('#only-thing').delay(4000).fadeOut('slow', function(){
              $('#info-age').fadeTo('slow', .9, "swing", function(){
                  $('#info-age, #child-future').delay(4000).fadeOut('slow', function(){
                    $('#background-road').fadeTo('slow', .9, "swing", function(){
                        $('#intercon, #transform').delay(2000).fadeTo('slow', 1, "swing", function(){
                            $('#intercon, #transform').delay(4000).fadeOut('slow', function(){
                                $('#interface, #the-way').fadeTo('slow', 1, "swing", function(){
                                    $('#interface, #the-way').delay(6000).fadeOut('slow', function(){
                                        $('#pill, #form').fadeTo('slow', 1, "swing", function(){
                                            $('#pill, #form').delay(13000).fadeOut('slow', function(){
                                                $('#robo-head, #human-nature').fadeTo('slow', 1, "swing", function(){
                                                    $('#robo-head, #human-nature').delay(4000).fadeOut('slow', function(){
                                                        $('#people-machines, #moral').fadeTo('slow', 1, "swing", function(){
                                                            $('#background-road, #people-machines, #moral').delay(4000).fadeOut('slow', function(){
                                                                $('#course').delay(1000).fadeTo('slow', 1, "swing", function(){
                                                                    $('#trees').delay(2000).fadeTo('slow', 1, "swing");
                                                                    $('#in-fact').delay(1000).fadeTo('slow', 1, "swing", function(){
                                                                        $('#course, #in-fact').delay(2000).fadeOut('slow', function(){
                                                                            $('#drone, #more').fadeTo('slow', 1, "swing", function(){
                                                                                $('#drone, #more').delay(4000).fadeOut('slow');
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                  });
              });
          });
      });
  });
});
