import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../graphql/queries";

function useCustomerOrders(userId: string) {
  const { loading, error, data } = useQuery(GET_ORDERS);

  const [orders, setOrders] = React.useState<Order[]>([]);

  React.useEffect(() => {
    if (!data) return;

    const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
      carrier: value.carrier,
      createdAt: value.createdAt,
      shippingCost: value.shippingCost,
      trackingId: value.trackingId,
      trackingItems: value.trackingItems,
      Lat: value.Lat,
      Lng: value.Lng,
      Address: value.Address,
      City: value.City,
    }));

    const customerOrders = orders.filter(
      (order) => order.trackingItems.customer_id === userId
    );

    setOrders(customerOrders);
  }, [data, userId]);

  return { loading, error, orders };
}

export default useCustomerOrders;
