from django.urls import path
from orders.views import OrdersView, OrderList, OrderDetail

urlpatterns = [
    path('', OrdersView.as_view(), name='orders-index'),
    path('api/orders/', OrderList.as_view(), name='order-list'),
    path('api/orders/<int:pk>/', OrderDetail.as_view(), name='order-detail'),
]
