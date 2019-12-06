$(function(){

  var $orders = $('#orders');
  var $name = $('#name');
  var $drink = $('#drink');
  var $csrftoken = $('[name="csrfmiddlewaretoken"]').attr('value');

  function addOrder(order){
    $orders.append('<li><button data-id="'+order.id+'" class="btn btn-outline-danger btn-xs mr-2 remove">&times;</button>Name: '+ order.name +' Drink: '+ order.drink +'</li>');
  }

  $.ajax({
    type: 'GET',
    url: '/orders/api/orders/',
    success: function(orders){
      $.each(orders, function(i, order){
        addOrder(order);
      });
    },
    error: function(){
      alert('Error loading orders');
    }
  });

  $('#add-order').on('click', function(){

    var order = {
      name: $name.val(),
      drink: $drink.val(),
    };

    $.ajax({
      type: 'POST',
      url: '/orders/api/orders/',
      data: order,
      headers:{"X-CSRFToken": $csrftoken},
      success: function(newOrder){
        addOrder(newOrder);
        $name.val("");
        $drink.val("");
      },
      error: function(){
        alert('Error saving order');
      }
    });
  });

  $orders.delegate('.remove', 'click', function(){

    var $li = $(this).closest('li');

    $.ajax({
      type: 'DELETE',
      url: '/orders/api/orders/' + $(this).attr('data-id') + '/',
      headers:{"X-CSRFToken": $csrftoken},
      success: function (){
        $li.remove();
      }
    });
  });

});
