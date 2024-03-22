type Props = {
  children: string;
  onClick: () => void;
};

const PrimaryConfirmBtn = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full"
    >
      {children}
    </button>
  );
};

export default PrimaryConfirmBtn;
