import {
  useFlutterwave,
  FlutterWaveButton,
  closePaymentModal,
} from "flutterwave-react-v3";
import icon from "../images/artsy_favicon.png";

export default function App({ amountx }) {
  const config = {
    public_key: "FLWPUBK_TEST-5ea2b80ca78e6a9922ed8a8fc64a5d18-X",

    tx_ref: Date.now(),
    currency: "USD",
    amount: amountx,
    payment_options: "card,mobilemoney",
    customer: {
      email: "herveralive@gmail.com",
      phonenumber: "+250786007267",
      name: "Herve Nkurikiyimfura",
    },

    customizations: {
      title: "Artsy",
      description: "Payment for items in cart",
      logo: icon,
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <button
        className="mx-auto bg-[#3341C1] hover:bg-[#051076] text-white rounded-md px-10 py-3 cursor-pointer"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal();
            },
            onClose: () => {
              console.log("You close me ooo");
            },
          });
        }}
      >
        Proceed with FlutterWave
      </button>
    </div>
  );
}
