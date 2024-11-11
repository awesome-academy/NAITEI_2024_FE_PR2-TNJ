import { useEffect, useState } from 'react';
import axios from 'axios';
import { getUserFromStorage } from 'src/utils/jwt';
import { ProductType } from 'src/types/product.type';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { CartItem } from 'src/types/cart.type';
import { useTranslation } from 'react-i18next';

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const apiBaseUrl = process.env.REACT_APP_API;
  const navigate = useNavigate();

  const { t } = useTranslation();

  const getItemCount = () => {
    return cart.length;
  };

  useEffect(() => {
    const fetchCart = async () => {
      const user = await getUserFromStorage();
      const email = user?.email;
      if (email) {
        const response = await axios.get(`${apiBaseUrl}users?email=${email}`);
        const user = response.data[0];
        setCart(user?.cart || []);
      }
    };
    fetchCart();
  }, []);

  const addToCart = async (product: ProductType, quantity: number = 1) => {
    try {
      const user = await getUserFromStorage();
      if (!user?.email) {
        navigate('/login');
        toast.error('Please login to add items to cart');
        return;
      }

      const productResponse = await axios.get(
        `${apiBaseUrl}products/${product.id}`
      );
      const currentProduct = productResponse.data;

      if (currentProduct.remainingStock <= 0) {
        toast.error('Product is out of stock');
        return;
      }

      const existingItem = cart.find((item) => item.id === product.id);
      let newCart: CartItem[];

      if (existingItem) {
        newCart = cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                remainingStock: item.remainingStock - 1,
              }
            : item
        );
      } else {
        newCart = [
          ...cart,
          {
            id: product.id,
            name: product.name,
            price: product.discountPrice,
            img: product.img[0],
            quantity: quantity,
            remainingStock: currentProduct.remainingStock - quantity,
          },
        ];
      }

      setCart(newCart);

      const response = await axios.get(
        `${apiBaseUrl}users?email=${user.email}`
      );
      const userData = response.data[0];
      await axios.patch(`${apiBaseUrl}users/${userData.id}`, {
        cart: newCart,
      });

      await axios.patch(`${apiBaseUrl}products/${product.id}`, {
        remainingStock: currentProduct.remainingStock - quantity,
      });

      toast.success('Product added to cart successfully');
    } catch (error) {
      toast.error('Failed to add product to cart');
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (productId: number) => {
    const itemToRemove = cart.find((item) => item.id === productId);
    if (itemToRemove) {
      const newCart = cart.filter((item) => item.id !== productId);
      setCart(newCart);
      await updateUserCart(newCart);

      const productResponse = await axios.get(
        `${apiBaseUrl}products/${productId}`
      );
      const currentProduct = productResponse.data;

      const updatedRemainingStock =
        currentProduct.remainingStock + itemToRemove.quantity;

      await axios.patch(`${apiBaseUrl}products/${productId}`, {
        remainingStock: updatedRemainingStock,
      });

      toast.success(t('cart.removeItemFromCart'));
    }
  };

  const updateQuantity = async (productId: number, quantity: number) => {
    const item = cart.find((item) => item.id === productId);
    if (item) {
      const newQuantity = Math.max(
        0,
        Math.min(quantity, item.remainingStock + item.quantity)
      );
      const quantityDifference = newQuantity - item.quantity;

      if (quantityDifference !== 0) {
        const updatedCart = cart.map((cartItem) =>
          cartItem.id === productId
            ? {
                ...cartItem,
                quantity: newQuantity,
                remainingStock: item.remainingStock - quantityDifference,
              }
            : cartItem
        );
        setCart(updatedCart);
        await updateUserCart(updatedCart);

        await axios.patch(`${apiBaseUrl}products/${productId}`, {
          remainingStock: item.remainingStock - quantityDifference,
        });

        toast.success('Quantity updated');
      }
    }
  };

  const updateUserCart = async (newCart: CartItem[]) => {
    const user = await getUserFromStorage();
    if (user?.email) {
      const response = await axios.get(
        `${apiBaseUrl}users?email=${user.email}`
      );
      const userData = response.data[0];
      await axios.patch(`${apiBaseUrl}users/${userData.id}`, {
        cart: newCart,
      });
    }
  };

  const handleSetCart = (newCart: CartItem[]) => {
    setCart(newCart);
  };

  const clearCart = async () => {
    const newCart: CartItem[] = [];
    setCart(newCart);

    const user = await getUserFromStorage();

    const response = await axios.get(`${apiBaseUrl}users?email=${user?.email}`);
    const userData = response.data[0];
    await axios.patch(`${apiBaseUrl}users/${userData.id}`, {
      cart: newCart,
    });

    cart.forEach(async (item) => {
      await axios.patch(`${apiBaseUrl}products/${item.id}`, {
        remainingStock: item.remainingStock + item.quantity,
      });
    });
    toast.success(t('cart.clear'));
  };

  return {
    cart,
    getItemCount,
    addToCart,
    handleSetCart,
    updateUserCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };
};
