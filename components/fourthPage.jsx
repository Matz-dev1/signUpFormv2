import ButtonBack from "./buttonBack";
import ButtonNext from "./buttonNext";

function FourthPage({
  onBack,
  onNext,
  title,
  currentSub,
  isChosen,
  isToggled,
}) {
  const parsePrice = (str) => parseInt(str.replace(/\D/g, ""));

  const total = isChosen.reduce(
    (sum, item) => sum + parsePrice(item.price[isToggled]),
    parsePrice(currentSub?.price[isToggled] || "0")
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };
  return (
    <div className="flex flex-col h-full gap-12">
      <div>
        <h2 className="text-4xl font-bold text-[#1e126c]">Finishing up</h2>
        <p className="text-gray-400">
          Double check everything looks right before confirming.
        </p>
      </div>
      <form
        className="flex flex-col gap-6 justify-between h-full w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-6 bg-teal-200 p-4 rounded-md">
          <div className="flex flex-row justify-between w-full">
            <div className="text-blue-800 font-bold flex flex-col">
              <p className="text-[18px]">{currentSub.type}</p>
              <p>({isToggled === 0 ? "monthly" : "yearly"})</p>
            </div>
            <div className="flex items-center">
              {currentSub.price[isToggled]}
            </div>
          </div>
          <div className="w-full border-b-2 border-gray-400"></div>
          <div>
            {isChosen.map((item) => (
              <div className="flex flex-row w-full justify-between">
                <p>{item.title}</p>
                <p>{item.price[isToggled]}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between w-full flex-row">
          <div>Total (per {isToggled === 0 ? "month" : "year"}):</div>
          <div>
            {total}/{isToggled === 0 ? "mo" : "yr"}
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <ButtonBack onBack={onBack} />

          <ButtonNext title={title} />
        </div>
      </form>
    </div>
  );
}
export default FourthPage;
