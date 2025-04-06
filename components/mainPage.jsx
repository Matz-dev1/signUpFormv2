"use client";
import { useState } from "react";
import FirstPage from "./clientInfoPage";
import SecondPage from "./subscrbtionTypePage";
import Sidebar from "./sidebar";
import ThirdPage from "./addOnsPage";
import FourthPage from "./summaryPage";
import ThankYouPage from "./thankYouMessage";

function MainPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [isToggled, setIsToggled] = useState(0);
  const [currentSubscribtion, setCurrentSubscribtion] = useState({});
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
              text="Next step"
            />
          )}
          {currentPage === 1 && (
            <SecondPage
              onNext={goNext}
              onBack={goBack}
              isToggled={isToggled}
              setIsToggled={setIsToggled}
              currentSubscribtion={currentSubscribtion}
              setCurrentSubscribtion={setCurrentSubscribtion}
              text="Next step"
            />
          )}
          {currentPage === 2 && (
            <ThirdPage
              onNext={goNext}
              onBack={goBack}
              isToggled={isToggled}
              isChosen={isChosen}
              setIsChosen={setIsChosen}
              text="Next step"
            />
          )}
          {currentPage === 3 && (
            <FourthPage
              onNext={goNext}
              onBack={goBack}
              text="Confirm"
              currentSubscribtion={currentSubscribtion}
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
