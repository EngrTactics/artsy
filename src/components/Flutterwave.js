import React from "react";
import {
  useFlutterwave,
  FlutterWaveButton,
  closePaymentModal,
} from "flutterwave-react-v3";

export default function App() {
  const config = {
    public_key: "FLWPUBK_TEST-08acfb7b98dd266ab691a78e3d61f69a-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  const fwConfig = {
    ...config,
    text: "Pay with fluter",
    callback: (response) => {
      closePaymentModal();
    },
    onClose: () => {
      console.log("jjj");
    },
  };

  return (
    <div className="App">
      <h1>Hello Test user</h1>

      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Payment with React hooks
      </button>
    </div>
  );
}