function ButtonBack({ onBack }) {
  return (
    <div className="flex align-middle items-center justify-center ">
      <button
        type="button"
        onClick={onBack}
        className="text-[16px] text-gray-500 cursor-pointer align-middle"
      >
        Go back
      </button>
    </div>
  );
}
export default ButtonBack;
