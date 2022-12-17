import { RxArrowRight } from "react-icons/rx";

const PrimaryButton = ({ position }) => {
  return (
    <a
      href="#"
      className={`p-3 inline-block w-auto h-auto border-white border-2 rounded-full ${position}`}
    >
      <RxArrowRight></RxArrowRight>
    </a>
  );
};

export default PrimaryButton;
