type Props = {
  children: string;
  onClick: () => void;
};

const PrimaryCancelBtn = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-600 hover:bg-red-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full"
    >
      {children}
    </button>
  );
};

export default PrimaryCancelBtn;
