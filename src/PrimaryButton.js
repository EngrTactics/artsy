import { RxArrowRight } from "react-icons/rx";

const PrimaryButton = ({ custom, arrow }) => {
  return (
    <a
      href="#"
      className={`p-3 inline-block w-auto h-auto border-2 rounded-full ${custom}`}
    >
      <RxArrowRight className={`${arrow}`}></RxArrowRight>
    </a>
  );
};

export default PrimaryButton;
