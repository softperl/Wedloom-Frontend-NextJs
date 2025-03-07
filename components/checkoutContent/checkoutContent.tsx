"use client";
import React, { useState } from "react";
import PaymentCard from "@/components/paymentCard/paymentCard";
import { handelError, NumberWithCommas } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import Path from "@/components/routesPath/path";
import Image from "next/image";
import { createPayment } from "@/lib/api";

const CheckoutContent = ({ packageName }: any) => {
  const router = useRouter();
  // Price State
  const price = "50000";
  const tax = "4500";
  const [quantity, setQuantity] = useState(1);

  // States for toggle
  const [pay, setPay] = useState(false);

  // Quantity Change Function
  const quantityChange = () => {
    const selectedValue = document.getElementById("selectValue");
    //@ts-ignore
    setQuantity(selectedValue?.value);
  };

  // Function For Navigate HomePage Again
  const navigateHomePage = () => {
    alert(
      `Payment Successful ${NumberWithCommas(
        Number(price) * quantity + Number(tax)
      )}`
    );
    router.push("/");
  };

  const handlePayment = async () => {
    try {
      const { data } = await createPayment();
      const { token, basket_id, merchant_id } = data;
      const html = `<!DOCTYPE html>
  <html>
      <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" crossorigin="anonymous">
          <title>PayFast WebCheckout Integration Demo</title>
      </head>
      <style>
            body { 
              display: none; 
            }
          </style>
      <body>
          <div class="container">
              <h2>PayFast WebCheckout Integration Demo</h2>
              
              <div class="card">
                  <div class="card-body">
                      <div class="card-header">
                          PayFast Web Checkout - Example Code
                      </div>
                      <!-- Submit form to your own backend API, which will proxy the request -->
                      <form id="paymentForm" method="post" action="https://ipguat.apps.net.pk/Ecommerce/api/Transaction/PostTransaction"> 
                          Currency Code: <input type="text" name="CURRENCY_CODE" value="PKR" /><br />
      Merchant ID: <input type="text" name="MERCHANT_ID" value="${merchant_id}" /><br />
      Token: <input type="text" name="TOKEN" value="${token}" /><br />
      Success URL: <input type="text" name="SUCCESS_URL" value="http://localhost:1337" /><br />
      Failure URL: <input type="text" name="FAILURE_URL" value="http://localhost:1337" /><br />
      Checkout URL: <input type="text" name="CHECKOUT_URL" value="https://typedwebhook.tools/webhook/cfe4e40e-8c5c-4d5b-867a-017bce41070c" /><br />
      Customer Email: <input type="text" name="CUSTOMER_EMAIL_ADDRESS" value="some-email@example.com" /><br />
      Customer Mobile: <input type="text" name="CUSTOMER_MOBILE_NO" value="323232332" /><br />
      Transaction Amount: <input type="text" name="TXNAMT" value="${
        Number(price) * quantity + Number(tax)
      }" /><br />
      Basket ID: <input type="text" name="BASKET_ID" value="${basket_id}" /><br />
      Transaction Date: <input type="text" name="ORDER_DATE" value="${new Date().toISOString()}" /><br />
      Signature: <input type="text" name="SIGNATURE" value="SOME-RANDOM-STRING" /><br />
      Version: <input type="text" name="VERSION" value="MERCHANT-CART-0.1" /><br />
      Item Description: <input type="text" name="TXNDESC" value="Item Purchased from Cart" /><br />
      Proccode: <input type="text" name="PROCCODE" value="00" /><br />
      Transaction Type: <input type="text" name="TRAN_TYPE" value='ECOMM_PURCHASE' /><br />
      Store ID/Terminal ID (optional): <input type="text" name="STORE_ID" value='' /><br />
      Recurring Transaction: <input type="checkbox" id="RECURRING_TXN" name="RECURRING_TXN" value="true"><br />
      <input type="submit" value="SUBMIT" />
                      </form> 
                  </div>
              </div>
          </div>
          <script>
            document.getElementById("paymentForm").submit();
          </script>
      </body>
  </html>`;
      //submit form
      const paymentWindow = window.open("", "_blank");
      paymentWindow?.document.write(html);
      paymentWindow?.document.close();
    } catch (error) {
      handelError(error);
    }
  };

  return (
    <div className="checkout_content_page pb-16 pt-8 border-b">
      <div className="container mx-auto lg:px-20 px-4">
        {/* Path */}
        <Path
          first="Home"
          second="Photographer"
          third="Profile"
          fourth="Checkout"
          fifth={undefined}
        />

        {/* Heading or Package Name */}
        <div className="heading mt-8 mb-4">
          <h1 className="lg:text-4xl text-2xl lg:text-start text-center font-bold text-textSecondary-900 capitalize">
            You Choosed{" "}
            <span className="text-textPrimary-900">{packageName}</span> Package
          </h1>
        </div>

        {/* Container Start */}
        <div className="checkout_container mt-8 flex justify-between lg:gap-12 gap-y-4 flex-wrap lg:flex-nowrap">
          {/* Left Side */}
          <div className="left bg-sectionBg-900 shadow-sm w-full lg:w-8/12 rounded border">
            {pay ? (
              <>
                {/* Payment Card Start */}
                <PaymentCard />
                {/* Payment Card End */}
              </>
            ) : (
              <>
                <div className="left_main_content">
                  <div className="photographer_details flex justify-center">
                    {/* <Image
                      width={500}
                      height={500}
                      src="https://images.pexels.com/photos/1707446/pexels-photo-1707446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                      className="w-full md:h-[350px] h-[200px]"
                    /> */}
                  </div>
                  {/* Summary Box */}
                  <div className="left_content lg:px-8 px-4 pt-4 pb-4 border-b">
                    <div className="photgrapher_name flex items-center gap-2">
                      <h2 className="text-textSecondary-900 text-xl font-semibold">
                        THE MEMORY CAPTURE
                      </h2>
                      <Image
                        width={500}
                        height={500}
                        src={"/blue.webp"}
                        alt=""
                        className="w-5 h-5"
                      />
                    </div>
                    <div className="subtitle mt-4">
                      <p className="capitalize text-textPrimary-900 font-semibold">
                        details overview of your choosed package
                      </p>
                    </div>
                    <div className="content mt-4">
                      <div className="summary_details">
                        <p className="text-textSecondary-900 font-semibold text-lg">
                          Summary
                        </p>
                      </div>
                      <p className="text-textSecondary-900 leading-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa ducimus iste neque! Quasi assumenda consequatur
                        rerum itaque alias exercitationem dicta blanditiis
                        accusantium. Magni animi dolor expedita eos soluta vero
                        voluptatem delectus, quam, repellendus id maxime quo
                        culpa harum, dolorum voluptates! Voluptates recusandae
                        eum placeat consequatur nemo incidunt repellendus
                        architecto tempore vero adipisci ad itaque nostrum
                        animi, consectetur sapiente sed, doloremque temporibus
                        assumenda labore atque beatae! Possimus quidem at
                        consequatur, est iusto numquam vero expedita rerum aut
                        eius ut officia officiis animi cupiditate, fugit magnam,
                        obcaecati quia architecto alias nesciunt et. Libero,
                        dolor omnis. Quisquam laborum itaque quas atque
                        excepturi minus.
                      </p>
                    </div>
                  </div>

                  {/* Qty & Price */}
                  <div className="lg:px-8 px-4 pt-4 flex justify-between items-center">
                    <div className="packageDetails w-full">
                      <p className="capitalize text-textPrimary-900 font-semibold">
                        {packageName}{" "}
                        <span className="text-textSecondary-900">
                          Package Details
                        </span>
                      </p>
                    </div>
                    <div className="qty_box w-full text-end">
                      <span className="text-textSecondary-900 font-semibold mr-3">
                        Qty
                      </span>
                      <select
                        className="w-24 text-textPrimary-900 font-medium py-1 bg-transparent border"
                        id="selectValue"
                        onChange={quantityChange}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                    <div className="w-full text-end">
                      <span className="text-lg text-textPrimary-900 font-medium">
                        Rs. {NumberWithCommas(Number(price) * quantity)}
                      </span>
                    </div>
                  </div>

                  {/* Package details */}
                  <div className="details_box lg:p-8 px-4 flex flex-wrap justify-between items-center gap-4 text-textSecondary-900 my-8">
                    <div className="details_box_1 lg:w-[23%] w-5/12">
                      <h6 className="font-bold">Details 1</h6>
                      <p>Information</p>
                    </div>
                    <div className="details_box_2 lg:w-[23%] w-5/12">
                      <h6 className="font-bold">Details 2</h6>
                      <p>Information</p>
                    </div>
                    <div className="details_box_3 lg:w-[23%] w-5/12">
                      <h6 className="font-bold">Details 3</h6>
                      <p>Information</p>
                    </div>
                    <div className="details_box_4 lg:w-[23%] w-5/12">
                      <h6 className="font-bold">Details 4</h6>
                      <p>Information</p>
                    </div>
                    <div className="details_box_5 lg:w-[23%] w-5/12">
                      <h6 className="font-bold">Details 5</h6>
                      <p>Information</p>
                    </div>
                    <div className="details_box_6 lg:w-[23%] w-5/12">
                      <h6 className="font-bold">Details 6</h6>
                      <p>Information</p>
                    </div>
                    <div className="details_box_7 lg:w-[23%] w-5/12">
                      <h6 className="font-bold">Details 7</h6>
                      <p>Information</p>
                    </div>
                    <div className="details_box_8 lg:w-[23%] w-5/12">
                      <h6 className="font-bold">Details 8</h6>
                      <p>Information</p>
                    </div>
                    <div className="details_box_9 lg:w-[23%] w-5/12">
                      <h6 className="font-bold">Details 9</h6>
                      <p>Information</p>
                    </div>
                    <div className="details_box_10 lg:w-[23%] w-5/12">
                      <h6 className="font-bold">Details 10</h6>
                      <p>Information</p>
                    </div>
                    <div className="details_box_11 lg:w-[23%] w-5/12">
                      <h6 className="font-bold">Details 11</h6>
                      <p>Information</p>
                    </div>
                    <div className="details_box_12 lg:w-[23%] w-5/12">
                      <h6 className="font-bold">Details 12</h6>
                      <p>Information</p>
                    </div>
                    <div className="details_box_13 lg:w-[23%] w-5/12">
                      <h6 className="font-bold">Details 13</h6>
                      <p>Information</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          {/* Right Side */}
          <div className="right h-max w-full lg:w-4/12">
            <div className="right_content p-4 rounded border shadow-sm">
              {/* Heading */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-textBlack-900">
                  Summary
                </h2>
              </div>

              {/* Fees */}
              <div className="subtotal_container">
                {/* Sub Total Box */}
                <div className="sub_total flex justify-between items-center text-base md:text-[17px] text-textSecondary-900 font-medium mb-3">
                  <div className="lg:w-9/12 w-full">
                    <p className="text-textPrimary-900">Subtotal</p>
                  </div>
                  <div className="lg:w-3/12 w-full text-end">
                    <span>
                      Rs. {NumberWithCommas(Number(price) * quantity)}
                    </span>
                  </div>
                </div>

                {/* Tax */}
                <div className="fees flex justify-between items-center text-base md:text-[17px] text-textSecondary-900 font-medium mb-3">
                  <div className="lg:w-9/12 w-full">
                    <p className="text-textPrimary-900">Service Fee</p>
                  </div>
                  <div className="lg:w-3/12 w-full text-end">
                    <span>Rs. {NumberWithCommas(Number(tax))}</span>
                  </div>
                </div>

                {/* Line Break */}
                <div className="w-full my-6">
                  <hr />
                </div>

                {/* Total Price */}
                <div className="total flex justify-between items-center text-base md:text-[17px] text-textSecondary-900 font-bold mb-3">
                  <div className="lg:w-9/12 w-full">
                    <p className="text-textPrimary-900">Total</p>
                  </div>
                  <div className="lg:w-3/12 w-full text-end">
                    <span>
                      Rs.{" "}
                      {NumberWithCommas(Number(price) * quantity + Number(tax))}
                    </span>
                  </div>
                </div>

                {/* Validity Price */}
                <div className="validity flex justify-between items-center text-base md:text-[17px] text-textSecondary-900 font-medium mb-6">
                  <div className="w-9/12">
                    <p className="text-textPrimary-900">Package Validity</p>
                  </div>
                  <div className="w-3/12 text-end">
                    <span>7 Days</span>
                  </div>
                </div>

                {/* Validity Price */}
                <div className="button mb-3 w-full">
                  {!pay && (
                    <button
                      className="bg-textPrimary-900 text-white text-lg py-4 w-full font-semibold rounded border border-textPrimary-900 hover:bg-transparent  hover:text-textSecondary-900 duration-200"
                      onClick={handlePayment}
                    >
                      Confirm Purchase
                    </button>
                  )}
                  {pay && (
                    <button
                      className="bg-textPrimary-900 text-white text-lg py-4 w-full font-semibold rounded border border-textPrimary-900 hover:bg-transparent  hover:text-textSecondary-900 duration-200"
                      onClick={navigateHomePage}
                    >
                      Pay Now
                    </button>
                  )}
                </div>

                {/* Charge */}
                <div className="w-full text-center mt-4 mb-2 text-sm font-medium text-textPrimary-900">
                  <p>You won&apos;t charged yet</p>
                </div>
              </div>
            </div>
            {/* Make Payment */}
            <div className="makePayment mt-4">
              <div className="w-full text-center">
                <span className="text-textSecondary-900 font-bold text-lg">
                  We Accept
                </span>
                <div className="image">
                  <Image
                    width={500}
                    height={500}
                    src={"/payment.webp"}
                    alt="payment_img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Container End */}
      </div>
    </div>
  );
};

export default CheckoutContent;
