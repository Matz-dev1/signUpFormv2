import ButtonNext from "./buttonNext";
import ButtonBack from "./buttonBack";
function ThirdPage({ isToggled, isChosen, setIsChosen, onBack, text, onNext }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };
  const addOns = (id) => {
    setIsChosen((prev) => {
      const selectedAddOn = checkboxData.find((item) => item.id === id);
      if (prev.some((item) => item.id === selectedAddOn.id)) {
        return prev.filter((item) => item.id !== selectedAddOn.id);
      } else {
        return [...prev, selectedAddOn];
      }
    });
  };
  const checkboxData = [
    {
      id: 0,
      title: "Online service",
      text: "Access to multiplayer games",
      price: {
        0: "+1$/mo",
        1: "+10$/yr",
      },
    },
    {
      id: 1,
      title: "Larger storage",
      text: "Extra 1TB of cloud save",
      price: {
        0: "+2$/mo",
        1: "+20$/yr",
      },
    },
    {
      id: 2,
      title: "Customizable profile",
      text: "Custom theme on your profile",
      price: {
        0: "+2$/mo",
        1: "+20$/yr",
      },
    },
  ];
  return (
    <div className="flex flex-col h-full gap-12">
      <div>
        <h2 className="text-4xl font-bold text-[#1e126c]">Pick add-ons</h2>
        <p className="text-gray-400">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 justify-between h-full w-full"
      >
        {isToggled === 0 && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 justify-between">
              {checkboxData.map(({ id, title, text, price }) => (
                <div
                  key={id}
                  onClick={() => addOns(id)}
                  className={`flex flex-row h-20 w-full justify-between rounded-md cursor-pointer hover:border-blue-700 ${
                    isChosen.some((item) => item.id === id)
                      ? "border-2 border-blue-500 bg-blue-200"
                      : "border-2 border-gray-400"
                  }`}
                >
                  <div className="flex flex-row gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 flex my-auto"
                      checked={isChosen.some((item) => item.id === id)}
                      onChange={() => addOns(id)}
                    />
                    <div className="flex flex-col my-auto">
                      <p>{title}</p>
                      <p>{text}</p>
                    </div>
                  </div>
                  <div className="flex my-auto pr-2">
                    <p>{price[0]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {isToggled === 1 && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 justify-between">
              {checkboxData.map(({ id, title, text, price }) => (
                <div
                  key={id}
                  onClick={() => addOns(id)}
                  className={`flex flex-row h-20 w-full justify-between rounded-md cursor-pointer hover:border-blue-700 ${
                    isChosen.some((item) => item.id === id)
                      ? "border-2 border-blue-500 bg-blue-200"
                      : "border-2 border-gray-400"
                  }`}
                >
                  <div className="flex flex-row gap-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 flex my-auto"
                      checked={isChosen.some((item) => item.id === id)}
                      onChange={() => addOns(id)}
                    />
                    <div className="flex flex-col my-auto">
                      <p>{title}</p>
                      <p>{text}</p>
                    </div>
                  </div>
                  <div className="flex my-auto pr-2">
                    <p>{price[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="flex flex-row justify-between">
          <ButtonBack onBack={onBack} />

          <ButtonNext text={text} />
        </div>
      </form>
    </div>
  );
}
export default ThirdPage;
