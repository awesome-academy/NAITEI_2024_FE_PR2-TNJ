import React, { useEffect, useState } from 'react';
import Eye from '../image/eye-regular.svg';
import EyeOff from '../image/eye-slash-regular.svg';
import Breadcrumb from 'src/components/Breadcrumb';
import axios from 'axios';
import { getUserFromStorage } from 'src/utils/jwt';
import { CartItem } from 'src/types/cart.type';
import { useTranslation } from 'react-i18next';
import formatPrice from 'src/utils/formatPrice';
import { Link } from 'react-router-dom';
import noPurchaseHistory from '../image/no-purchase-history.jpg';
import Button from 'src/components/Button';

type ShippingDetails = {
  name: string;
  address: string;
  phone: string;
  email: string;
  notes?: string;
  companyName?: string;
  vatNumber?: string;
};

type Order = {
  id: string;
  cartInfo: CartItem[];
  shippingDetails: ShippingDetails;
  totalSubTotal: number;
};

export default function PurchaseHistory() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [expandedOrders, setExpandedOrders] = useState<Record<string, boolean>>(
    {}
  );
  const [expandedShipping, setExpandedShipping] = useState<
    Record<string, boolean>
  >({});

  const { t } = useTranslation();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const user = await getUserFromStorage();
        const response = await axios.get(
          `${process.env.REACT_APP_API}users?email=${user?.email}`
        );
        const userData = response.data[0];
        if (userData) {
          setOrders(userData.order);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrders((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
  };

  const toggleShippingDetails = (orderId: string) => {
    setExpandedShipping((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
  };

  return (
    <div className="min-h-screen ">
      <Breadcrumb />
      <section className="max-w-[1230px] w-full px-6 mx-auto py-8 font-poppins">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          {t('purchase-history.purchase-history')}
        </h2>

        {orders.length > 0 ? (
          <div className="space-y-6">
            {orders.map((order, index) => (
              <div
                key={order.id}
                className="bg-white rounded-xl shadow-sm  border-2 overflow-hidden"
              >
                <div className="bg-gray-50 p-6 border-b border-gray-100">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {t('purchase-history.order')} #{index + 1}
                      </h3>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm text-gray-600">
                          {t('purchase-history.total-amount')}
                        </p>
                        <p className="text-xl font-semibold text-primary">
                          {formatPrice(order.totalSubTotal)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">
                          {t('purchase-history.items')}
                        </p>
                        <p className="text-lg font-semibold text-gray-800">
                          {order.cartInfo.length}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <button
                        onClick={() => toggleShippingDetails(order.id)}
                        className="w-full flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div>
                          <p className="font-medium text-gray-700">
                            {t('purchase-history.reciept-detail')}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {order.shippingDetails.name}
                          </p>
                        </div>
                        {expandedShipping[order.id] ? (
                          <img src={EyeOff} className="w-5 h-5 text-gray-500" />
                        ) : (
                          <img src={Eye} className="w-5 h-5 text-gray-500" />
                        )}
                      </button>

                      {expandedShipping[order.id] && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                          <dl className="space-y-2">
                            <div>
                              <dt className="text-sm text-gray-600">
                                {t('purchase-history.address')}
                              </dt>
                              <dd className="text-gray-800">
                                {order.shippingDetails.address}
                              </dd>
                            </div>
                            <div>
                              <dt className="text-sm text-gray-600">
                                {t('purchase-history.phone')}
                              </dt>
                              <dd className="text-gray-800">
                                {order.shippingDetails.phone}
                              </dd>
                            </div>
                            <div>
                              <dt className="text-sm text-gray-600">Email</dt>
                              <dd className="text-gray-800">
                                {order.shippingDetails.email}
                              </dd>
                            </div>
                            {order.shippingDetails.notes && (
                              <div>
                                <dt className="text-sm text-gray-600">
                                  {t('purchase-history.notes')}
                                </dt>
                                <dd className="text-gray-800">
                                  {order.shippingDetails.notes}
                                </dd>
                              </div>
                            )}
                          </dl>
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <button
                        onClick={() => toggleOrderDetails(order.id)}
                        className="w-full flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div>
                          <p className="font-medium text-gray-700">
                            {t('purchase-history.order-detail')}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {order.cartInfo.length}{' '}
                            {t('purchase-history.product')}
                          </p>
                        </div>
                        <span className="flex flex-col items-start">
                          <span>{t('purchase-history.shipping')}</span>
                          <span className="text-primary text-xs">
                            + {formatPrice(30000)}
                          </span>
                        </span>
                        {expandedOrders[order.id] ? (
                          <img src={EyeOff} className="w-5 h-5 text-gray-500" />
                        ) : (
                          <img src={Eye} className="w-5 h-5 text-gray-500" />
                        )}
                      </button>

                      {expandedOrders[order.id] && (
                        <div className="mt-4 space-y-4">
                          {order.cartInfo.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="p-4 bg-gray-50 rounded-lg"
                            >
                              <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-white rounded-md border border-gray-200">
                                  <Link to={`/detail?id=${item.id}`}>
                                    <img
                                      src={item.img}
                                      alt={item.name}
                                      className="w-full h-full object-cover rounded-md"
                                    />
                                  </Link>
                                </div>
                                <div className="flex-1">
                                  <Link
                                    to={`/detail?id=${item.id}`}
                                    className="font-medium text-gray-800 transition-all hover:text-primary"
                                  >
                                    {item.name}
                                  </Link>
                                  <p className="text-sm text-gray-600">
                                    {t('purchase-history.quantity')}:
                                    {item.quantity} × {formatPrice(item.price)}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium text-gray-800">
                                    {formatPrice(item.quantity * item.price)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center  bg-white rounded-xl shadow-sm">
            <img
              src={noPurchaseHistory}
              alt="purchase history not found"
              className="w-[400px] mx-auto"
            />
            <Link to="/" className="text-center">
              <Button
                title={t('cart.buy-more')}
                variant="primary"
                className="mb-10 mx-auto"
              />
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
