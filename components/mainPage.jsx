"use client";
import { useState } from "react";
import ClientInfoPage from "./clientInfoPage";
import SubscriptionTypePage from "./subscriptionTypePage";
import Sidebar from "./sidebar";
import AddOnsPage from "./addOnsPage";
import SummaryPage from "./summaryPage";
import ThankYouMessage from "./thankYouMessage";

function MainPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [isToggled, setIsToggled] = useState(0);
  const [currentSubscription, setCurrentSubscription] = useState({});
  const [chosenAddOns, setChosenAddOns] = useState([]);

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
            <ClientInfoPage
              onNext={goNext}
              formValues={formValues}
              setFormValues={setFormValues}
              text="Next step"
            />
          )}
          {currentPage === 1 && (
            <SubscriptionTypePage
              onNext={goNext}
              onBack={goBack}
              isToggled={isToggled}
              setIsToggled={setIsToggled}
              currentSubscription={currentSubscription}
              setCurrentSubscription={setCurrentSubscription}
              text="Next step"
            />
          )}
          {currentPage === 2 && (
            <AddOnsPage
              onNext={goNext}
              onBack={goBack}
              isToggled={isToggled}
              chosenAddOns={chosenAddOns}
              setChosenAddOns={setChosenAddOns}
              text="Next step"
            />
          )}
          {currentPage === 3 && (
            <SummaryPage
              onNext={goNext}
              onBack={goBack}
              text="Confirm"
              currentSubscription={currentSubscription}
              chosenAddOns={chosenAddOns}
              isToggled={isToggled}
            />
          )}
          {currentPage === 4 && <ThankYouMessage />}
        </div>
      </div>
    </div>
  );
}
export default MainPage;
