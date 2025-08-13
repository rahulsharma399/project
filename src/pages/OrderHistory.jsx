import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, Eye, Download, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const OrderHistory = () => {
  // Mock order data
  const [orders] = useState([
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 299.99,
      items: [
        {
          id: 1,
          name: 'iPhone 15 Pro',
          price: 999,
          quantity: 1,
          image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop'
        }
      ],
      shipping: {
        address: '123 Main St, New York, NY 10001',
        carrier: 'FedEx',
        tracking: 'FDX123456789'
      }
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-10',
      status: 'processing',
      total: 89.99,
      items: [
        {
          id: 7,
          name: 'Luxury Skincare Set',
          price: 89,
          quantity: 1,
          image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop'
        }
      ],
      shipping: {
        address: '123 Main St, New York, NY 10001',
        carrier: 'UPS',
        tracking: 'UPS987654321'
      }
    },
    {
      id: 'ORD-2024-003',
      date: '2024-01-05',
      status: 'shipped',
      total: 149.99,
      items: [
        {
          id: 6,
          name: 'Professional Tennis Racket',
          price: 149,
          quantity: 1,
          image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop'
        }
      ],
      shipping: {
        address: '123 Main St, New York, NY 10001',
        carrier: 'DHL',
        tracking: 'DHL456789123'
      }
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return '✅';
      case 'shipped':
        return '🚚';
      case 'processing':
        return '⏳';
      case 'cancelled':
        return '❌';
      default:
        return '📦';
    }
  };

  const filterOrders = (status) => {
    if (status === 'all') return orders;
    return orders.filter(order => order.status === status);
  };

  const OrderCard = ({ order }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold">{order.id}</CardTitle>
            <p className="text-gray-600 text-sm mt-1">
              Placed on {new Date(order.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
          <Badge className={`${getStatusColor(order.status)} capitalize`}>
            {getStatusIcon(order.status)} {order.status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {/* Order Items */}
          <div className="space-y-3">
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center space-x-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                </div>
                <span className="font-medium">${item.price}</span>
              </div>
            ))}
          </div>

          {/* Order Total */}
          <div className="flex justify-between items-center pt-3 border-t">
            <span className="font-semibold">Total: ${order.total}</span>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-1" />
                View Details
              </Button>
              {order.status === 'delivered' && (
                <Button variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4 mr-1" />
                  Reorder
                </Button>
              )}
            </div>
          </div>

          {/* Shipping Info */}
          {order.shipping.tracking && (
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Tracking Information</p>
              <p className="text-sm text-gray-600">
                Carrier: {order.shipping.carrier} • Tracking: {order.shipping.tracking}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Order History</h1>
            <p className="text-gray-600 mt-1">View and manage your orders</p>
          </div>
          <div className="flex space-x-2">
            <Select defaultValue="6months">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1month">Last month</SelectItem>
                <SelectItem value="3months">Last 3 months</SelectItem>
                <SelectItem value="6months">Last 6 months</SelectItem>
                <SelectItem value="1year">Last year</SelectItem>
                <SelectItem value="all">All time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-16">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No orders yet</h3>
            <p className="text-gray-600 mb-6">When you place orders, they'll appear here</p>
            <Button asChild>
              <Link to="/products">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="processing">Processing</TabsTrigger>
              <TabsTrigger value="shipped">Shipped</TabsTrigger>
              <TabsTrigger value="delivered">Delivered</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {orders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </TabsContent>

            <TabsContent value="processing" className="space-y-4">
              {filterOrders('processing').length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600">No processing orders</p>
                </div>
              ) : (
                filterOrders('processing').map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))
              )}
            </TabsContent>

            <TabsContent value="shipped" className="space-y-4">
              {filterOrders('shipped').length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600">No shipped orders</p>
                </div>
              ) : (
                filterOrders('shipped').map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))
              )}
            </TabsContent>

            <TabsContent value="delivered" className="space-y-4">
              {filterOrders('delivered').length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600">No delivered orders</p>
                </div>
              ) : (
                filterOrders('delivered').map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))
              )}
            </TabsContent>

            <TabsContent value="cancelled" className="space-y-4">
              {filterOrders('cancelled').length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600">No cancelled orders</p>
                </div>
              ) : (
                filterOrders('cancelled').map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))
              )}
            </TabsContent>
          </Tabs>
        )}

        {/* Order Actions */}
        {orders.length > 0 && (
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-4">Need Help?</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download Invoice
              </Button>
              <Button variant="outline" size="sm">
                Track Package
              </Button>
              <Button variant="outline" size="sm">
                Return Item
              </Button>
              <Button variant="outline" size="sm">
                Contact Support
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;