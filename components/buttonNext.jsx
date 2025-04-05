function ButtonNext({ title }) {
  return (
    <div>
      <div className="flex justify-end">
        <div className="flex justify-end ">
          <button
            type="submit"
            className="rounded-sm bg-[#1e126c] p-2 px-2 text-[16px] text-white cursor-pointer shadow-md"
          >
            {title}
          </button>
        </div>
      </div>
    </div>
  );
}
export default ButtonNext;
