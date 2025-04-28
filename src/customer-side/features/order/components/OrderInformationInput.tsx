"use client";
import React, { useEffect, useState } from "react";
import ShippingInformationForm from "./ShippingInformationForm";
import CompleteShippingData from "./CompleteShippingData";
import PaymentChoose from "./PaymentChoose";
import useCraftStore from "@/customer-side/stores/useCraftStore";
import useSWR from "swr";
import { fetchCustomer } from "@/customer-side/services/HomePage";
import { storeOrder } from "@/customer-side/services/Order";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const OrderInformationInput = () => {
  const [shippingInformation, setShippingInformation] = useState({
    ID: "",
    Address: "",
    Email: "",
    Name: "",
    Phone: "",
    Note: "",
  });

  const [addingCustomerData, setAddingCustomerData] = useState<boolean>(false);

  const customerData = useSWR(
    process.env.NEXT_PUBLIC_BASE_URL + "/customer-data",
    fetchCustomer
  );

  const router = useRouter();

  useEffect(() => {
    if (customerData.data && !customerData.isLoading) {
      setShippingInformation({
        ID: customerData.data.id,
        Address: customerData.data.address,
        Email: customerData.data.email,
        Name: customerData.data.name,
        Phone: customerData.data.phone,
        Note: "",
      });
      setAddingCustomerData(true);
    }
  }, [customerData.isLoading]);

  const [completeForm, setCompleteForm] = useState({
    shipping: false,
    Payment: false,
  });

  const [PaymentID, setPaymentID] = useState<number>();

  const { data } = useCraftStore();

  const orderProduct = async () => {
    if (window.confirm("Are you sure you want to place the order?")) {
      const subTotal = data.reduce((total, product) => {
        return total + product.unit_price * product.qty;
      }, 0);

      const totalDiscount = data.reduce((total, product) => {
        return total + product.discount_amount * product.qty;
      }, 0);

      const totalProfit = data.reduce((total, product) => {
        return total + product.profit_amount * product.qty;
      }, 0);

      const totalQty = data.reduce((total, product) => {
        return total + product.qty;
      }, 0);

      const orderDetails = data.map((el) => {
        return {
          product_id: el.id,
          product_size_id: el.product_size_id,
          size: el.size,
          unit_price: el.unit_price,
          qty: el.qty,
        };
      });

      const StoreData = {
        customer_id: shippingInformation.ID,
        payment_id: PaymentID,
        sub_total: subTotal,
        tax: Math.ceil(subTotal * 0.05),
        total_price: subTotal + Math.ceil(subTotal * 0.05),
        total_qty: totalQty,
        discount_amount: totalDiscount,
        profit_amount: totalProfit,
        total_products: data.length,
        name: shippingInformation.Name,
        email: shippingInformation.Email,
        phone: shippingInformation.Phone,
        address: shippingInformation.Address,
        note: shippingInformation.Note,
        orderDetails: orderDetails,
      };

      try {
        const res = await storeOrder(StoreData);
        const json = await res.json();

        if (json.status !== 201) {
          toast.error(json.message);
          
          return;
        }

        toast.success("Product ordered successfully");
        router.push("/order-details/"+json.data.id);
      } catch (error) {
        toast.error("An error occurred while ordering the product.");
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="px-3 xl:px-10 flex flex-col gap-12">
      <Toaster />
      {completeForm.shipping ? (
        <CompleteShippingData
          shippingInformation={shippingInformation}
          setCompleteForm={setCompleteForm}
        />
      ) : (
        addingCustomerData && (
          <ShippingInformationForm
            shippingInformation={shippingInformation}
            setCompleteForm={setCompleteForm}
            setShippingInformation={setShippingInformation}
          />
        )
      )}
      <PaymentChoose
        setPaymentID={setPaymentID}
        setCompleteForm={setCompleteForm}
        completeForm={completeForm}
      />
      <button
        onClick={orderProduct}
        disabled={!completeForm.shipping && !completeForm.Payment}
        className="text-lg font-medium bg-black flex justify-center items-center py-4 text-white disabled:bg-gray-300 disabled:text-gray-600"
      >
        Order The Products
      </button>
    </div>
  );
};

export default OrderInformationInput;
