"use client";
import { useState, useEffect } from "react";
import FirstPage from "./firstPage";
import SecondPage from "./secondPage";
import Sidebar from "./sidebar";
import ThirdPage from "./thirdPage";
import FourthPage from "./fourthPage";
import ThankYouPage from "./tyMessage";

function MainPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phoneNum: "",
  });
  const [isToggled, setIsToggled] = useState(0);
  const [currentSub, setCurrentSub] = useState({});
  const [isChosen, setIsChosen] = useState([]);

  const goNext = () => setCurrentPage((prev) => prev + 1);
  const goBack = () => setCurrentPage((prev) => prev - 1);
  return (
    <div className="flex h-[100vh]">
      <div className="flex w-[60%] h-[80vh] max-w-[1024px] min-w-[900px] gap-4 rounded-md m-auto justify-end bg-amber-50 shadow-2xl">
        <div className="w-[30%] m-4">
          <Sidebar id={currentPage} />
        </div>
        <div className="flex flex-col w-[70%] justify-start text-start px-20 py-10 gap-10">
          {currentPage === 0 && (
            <FirstPage
              onNext={goNext}
              formValues={formValues}
              setFormValues={setFormValues}
              title="Next step"
            />
          )}
          {currentPage === 1 && (
            <SecondPage
              onNext={goNext}
              onBack={goBack}
              isToggled={isToggled}
              setIsToggled={setIsToggled}
              currentSub={currentSub}
              setCurrentSub={setCurrentSub}
              title="Next step"
            />
          )}
          {currentPage === 2 && (
            <ThirdPage
              onNext={goNext}
              onBack={goBack}
              isToggled={isToggled}
              isChosen={isChosen}
              setIsChosen={setIsChosen}
              title="Next step"
            />
          )}
          {currentPage === 3 && (
            <FourthPage
              onNext={goNext}
              onBack={goBack}
              title="Confirm"
              currentSub={currentSub}
              isChosen={isChosen}
              isToggled={isToggled}
            />
          )}
          {currentPage === 4 && <ThankYouPage />}
        </div>
      </div>
    </div>
  );
}
export default MainPage;
