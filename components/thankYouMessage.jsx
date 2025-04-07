import Image from "next/image";
import ThankYouIcon from "@/public/images/icon-thank-you.svg";
function thankYouMessage() {
  return (
    <div className="flex flex-col h-full gap-4 justify-center text-center items-center">
      <Image src={ThankYouIcon} alt="thank you icon" />
      <h2 className="text-[32px] font-bold text-[#2b1d8a]">Thank you!</h2>
      <p className="text-gray-400">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        <a href="mailto: support@loremgaming.com">support@loremgaming.com</a>.
      </p>
    </div>
  );
}
export default thankYouMessage;
