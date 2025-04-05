function Sidebar({ id }) {
  const data = [
    {
      id: 0,
      num: "1",
      text: {
        0: "STEP 1",
        1: "YOUR INFO",
      },
    },
    {
      id: 1,
      num: "2",
      text: {
        0: "STEP 2",
        1: "SELECT PLAN",
      },
    },
    {
      id: 2,
      num: "3",
      text: {
        0: "STEP 3",
        1: "ADD-ONS",
      },
    },
    {
      id: 3,
      num: "4",
      text: {
        0: "STEP 4",
        1: "SUMMARY",
      },
    },
  ];
  return (
    <div className="flex flex-col justify-start pt-10 pl-6 gap-6  w-full bg-[url('/images/bg-sidebar-desktop.svg')] h-full bg-no-repeat bg-center overflow-hidden rounded-lg">
      {data.map((el) => (
        <div className="flex flex-row gap-6">
          <div
            key={el.id}
            id={el.id}
            className={`flex rounded-full text-[20px] bg-none border-2 w-[50px] h-[50px] items-center justify-center border-white  ${
              el.id === id ? "bg-white text-black" : "text-white"
            }`}
          >
            {el.num}
          </div>
          <div className="flex flex-col text-[14px] justify-center">
            <p className="text-gray-300">{el.text[0]}</p>
            <p className="text-white">{el.text[1]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Sidebar;
