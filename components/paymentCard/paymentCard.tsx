"use client";
import { useState } from "react";
import CardPaymentBox from "@/components/paymentCard/cardPaymentBox";
import LocalPaymentBoxCard from "@/components/paymentCard/localPaymentBoxCard";
import Image from "next/image";

const PaymentCard = () => {
  // State
  const [localPayment, setLocalPayment] = useState(false);
  // Change Card Box
  const [localPaymentBox, setLocalPaymentBox] = useState(false);

  // Credit Card Payment
  const cardPayment = () => {
    setLocalPayment(false);
    setLocalPaymentBox(false);
  };

  // Checked Value Changed
  const localPaymentOn = () => {
    setLocalPayment(true);
    setLocalPaymentBox(true);
  };

  return (
    <div className="payment_Card w-full">
      {/* Heading */}
      <div className="py-4 px-4">
        <span className="text-textSecondary-900 font-semibold">
          Payment Options
        </span>
      </div>

      {/* Payment Methods */}
      <div className="payment_method flex items-center bg-white px-4 border-t border-b py-2 md:py-0">
        <form className="flex flex-col gap-2 w-full">
          <div className="w-full flex items-center">
            <input
              className="accent-textPrimary-900 scale-150"
              type="radio"
              id="creditCard"
              name="service"
              value="CreditCard"
              checked={!localPayment}
              onClick={cardPayment}
            />
            <label className="pl-2" htmlFor="creditCard">
              Debit / Credit Card
            </label>
          </div>

          <div className="w-full flex items-center">
            <input
              className="accent-textPrimary-900 scale-150"
              type="radio"
              id="local_payment"
              name="service"
              value="LocalPayment"
              checked={localPayment}
              onClick={localPaymentOn}
            />
            <label className="pl-2" htmlFor="local_payment">
              Local Payment
            </label>
          </div>
        </form>
        <div className="w-full">
          <Image fill src={"/payment.webp"} alt="" />
        </div>
      </div>

      {/* Form Content */}
      <div className="form_content p-4">
        {/* Form Start */}
        {localPaymentBox ? <LocalPaymentBoxCard /> : <CardPaymentBox />}
        {/* Form End */}
      </div>
    </div>
  );
};

export default PaymentCard;
