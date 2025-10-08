import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  CreditCard,
  Leaf,
  Mail,
  Shield,
  ShoppingCart,
  Ticket,
  Wallet,
} from "lucide-react";
import { useState } from "react";

function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How do I generate ticket",
      a: "Simply click the 'Generate Your Ticket' button, choose the Amount you need, enter your email, select your payment method, complete the payment, and your ticket will be sent to your email instantly.",
    },
    {
      q: "Can I buy more tickets after getting one?",
      a: "Yes! You can always generate another ticket at any time. Each new ticket will be sent to your email once your payment is confirmed.",
    },
    {
      q: "How will I receive my ticket?",
      a: "After completing your payment, your ticket will be automatically generated and sent to the email address you provided during the booking process.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept various payment methods including credit cards, debit cards, Bank Transfer, USSD payments, Apple Pay / Google Pay. You can choose your preferred method during checkout.",
    },
    {
      q: "Is my payment secure?",
      a: "We use industry-standard encryption and secure payment gateways to ensure your payment information is protected at all times.",
    },
    {
      q: "Can I cancel or modify my ticket?",
      a: "Yes, you can cancel or modify your ticket by contacting our customer support team. Cancellation policies may apply depending on how close to departure time you request changes.",
    },
    {
      q: "What if I don't receive my ticket email?",
      a: "Check your spam folder first. If you still can't find it, contact our customer support team with your booking details and we'll resend your ticket immediately.",
    },
    {
      q: "Do I need to print my ticket?",
      a: "No, you can show your digital ticket on your phone. However, you're welcome to print it if you prefer a physical copy.",
    },
    {
      q: "Can someone else use my ticket?",
      a: "Your ticket has a unique QR code that represents the total amount you paid. If someone else gets access to your ticket, they could use it — so please keep it safe. Once it’s scanned, the amount on it is marked as used and can’t be reused.",
    },
    {
      q: "Can I buy tickets for more than one person?",
      a: "Yes! You can buy a single ticket that covers multiple passengers. For example, if the fare is ₦500 per person and you pay ₦2000, that ticket will be valid for 4 passengers in total. The driver will confirm the total amount when scanning your ticket.",
    },
    {
      q: "Can I reuse my ticket or save the balance for later?",
      a: "No, each ticket can only be used once. The full amount on your ticket is marked as used after it’s scanned. For example, if you buy a ₦5000 ticket for a trip that costs ₦3000, the remaining ₦2000 won’t be refundable or reusable. Tip: Always buy a ticket that matches your exact trip amount to avoid losing any unused balance.",
    },
    {
      q: "Can I use one email for multiple ticket purchases?",
      a: "Yes! You can use the same email every time you buy tickets — all your tickets will be sent there separately.",
    },
    {
      q: "How do I verify my ticket is valid?",
      a: "Each ticket comes with a unique QR code, which can be scanned using any QR code scanner app to confirm its authenticity. Additionally, the driver will verify your ticket by scanning the QR code when you board the shuttle bus.",
    },
    {
      q: "What if my phone dies before I show my ticket?",
      a: "If your phone battery runs out, you can show a printed copy of your ticket, or our team can help confirm your booking using your email or ticket ID.",
    },
    {
      q: "My internet disconnected while generating my ticket what should I do?",
      a: "If your payment went through but the ticket didn’t load or show, don’t try to repay immediately. Check your email — the system automatically sends your ticket once payment is confirmed. If it’s still not there after a few minutes, contact support with your payment details.",
    },
  ];

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <div>
      <section className="flex flex-col justify-center items-center text-center gap-3 px-3 py-5 sm:py-16">
        <div className="flex justify-center items-center">
          <img src="/logo.png" alt="" className="sm:w-[250px] w-[180px] " />
        </div>
        <div>
          <h1 className="sm:text-[60px] text-[30px] font-bold ">
            Danraph Ecocruise
          </h1>
          <p className="font-semibold text-gray-500 sm:text-[16px] text-[14px] sm:-translate-y-[10px]  ">
            A Subsidiary of DanRaph Integrated Services LTD
          </p>

          <p className="sm:text-[20px] text-[15px] max-w-[700px] font-medium text-gray-500 py-5 ">
            Experience comfortable, eco-friendly travel with our premium shuttle
            service. Book your journey today and travel sustainably.
          </p>
        </div>
        <button className="flex mt-5 items-center gap-3 bg-[#0047a7] hover:bg-[#0457c3] text-white px-5 py-3 rounded-[15px] text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer  ">
          <span className="flex items-center gap-2">
            <Ticket className="sm:w-6 sm:h-6 w-4 h-4" />{" "}
            <span>Generate Your Ticket</span>
          </span>
          <span className="sm:text-[20px] text-[15px] ">→</span>
        </button>
        <div className="grid grid-cols-3 sm:gap-15 gap-2 items-center sm:pt-10 py-5 ">
          <div className="flex flex-col justify-center items-center">
            <p className="sm:text-[35px] text-[25px] font-bold "> 1k+</p>
            <p className="text-gray-400 sm:text-[15px] text-[13px] ">
              Tickets generated
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="sm:text-[35px] text-[25px]  font-bold "> 500+</p>
            <p className="text-gray-400 m:text-[15px] text-[13px] ">
              Active Users so far
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="sm:text-[35px] text-[25px]  font-bold ">100%</p>
            <p className="text-gray-400 m:text-[15px] text-[13px]  ">
              Eco friendly
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f9fc]   ">
        <div className=" max-w-[1180px] mx-auto px-4 text-center">
          <h2 className="sm:text-[35px] text-[27px] font-bold ">
            How to Generate Tickets
          </h2>
          <p className="text-gray-600 text-[14px] sm:text-[16px]">
            Get your Danraph Ecocruise shuttle bus ticket in just a few simple
            steps
          </p>
          <div className="grid sm:grid-cols-3 grid-cols-1 sm:py-10 py-5 sm:gap-10 gap-7 items-center justify-between ">
            <div className="flex flex-col items-center">
              <div className="bg-[#0047a7] relative rounded-full sm:w-[65px] sm:h-[65px]  w-[50px] h-[50px] flex justify-center items-center text-white ">
                <Ticket className="sm:w-8 sm:h-8 w-5 h-5  " />
                <p className="bg-white border font-medium sm:w-[25px] sm:h-[25px] w-[20px] h-[20px]  rounded-full text-[#0047a7] justify-center items-center flex absolute top-0 right-0 text-[14px] sm:text-[16px]  ">
                  1
                </p>
              </div>
              <p className="font-medium sm:text-[22px] text-[19px]">
                Click Generate Ticket
              </p>
              <p className="text-gray-500 max-w-[350px] ">
                Start by clicking the 'Generate Your Ticket' button above
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#0047a7] relative rounded-full sm:w-[65px] sm:h-[65px]  w-[50px] h-[50px] flex justify-center items-center text-white ">
                <ShoppingCart className="sm:w-8 sm:h-8 w-5 h-5  " />
                <p className="bg-white border font-medium sm:w-[25px] sm:h-[25px] w-[20px] h-[20px]  rounded-full text-[#0047a7] justify-center items-center flex absolute top-0 right-0 text-[14px] sm:text-[16px]  ">
                  2
                </p>
              </div>
              <p className="font-medium text-[22px]">Choose Amount</p>
              <p className="text-gray-500 max-w-[350px] ">
                Select the number of tickets you would like to purchase
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#0047a7] relative rounded-full sm:w-[65px] sm:h-[65px]  w-[50px] h-[50px] flex justify-center items-center text-white ">
                <Mail className="sm:w-8 sm:h-8 w-5 h-5  " />
                <p className="bg-white border font-medium sm:w-[25px] sm:h-[25px] w-[20px] h-[20px]  rounded-full text-[#0047a7] justify-center items-center flex absolute top-0 right-0 text-[14px] sm:text-[16px]  ">
                  3
                </p>
              </div>
              <p className="font-medium sm:text-[22px] text-[19px]">
                Add Your Email
              </p>
              <p className="text-gray-500 max-w-[350px] ">
                Enter your email address to receive your ticket
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#0047a7] relative rounded-full sm:w-[65px] sm:h-[65px]  w-[50px] h-[50px] flex justify-center items-center text-white ">
                <Wallet className="sm:w-8 sm:h-8 w-5 h-5  " />
                <p className="bg-white border font-medium sm:w-[25px] sm:h-[25px] w-[20px] h-[20px]  rounded-full text-[#0047a7] justify-center items-center flex absolute top-0 right-0 text-[14px] sm:text-[16px]  ">
                  4
                </p>
              </div>
              <p className="font-medium sm:text-[22px] text-[19px]">
                Choose Payment Method
              </p>
              <p className="text-gray-500 max-w-[350px] ">
                Select your preferred payment method from available options
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#0047a7] relative rounded-full sm:w-[65px] sm:h-[65px]  w-[50px] h-[50px] flex justify-center items-center text-white ">
                <CreditCard className="sm:w-8 sm:h-8 w-5 h-5  " />
                <p className="bg-white border font-medium sm:w-[25px] sm:h-[25px] w-[20px] h-[20px]  rounded-full text-[#0047a7] justify-center items-center flex absolute top-0 right-0 text-[14px] sm:text-[16px]  ">
                  5
                </p>
              </div>
              <p className="font-medium sm:text-[22px] text-[19px]">
                Complete Payment
              </p>
              <p className="text-gray-500 max-w-[350px] ">
                Securely pay for your tickets using your chosen payment method
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#0047a7] relative rounded-full sm:w-[65px] sm:h-[65px]  w-[50px] h-[50px] flex justify-center items-center text-white ">
                <CheckCircle className="sm:w-8 sm:h-8 w-5 h-5  " />
                <p className="bg-white border font-medium sm:w-[25px] sm:h-[25px] w-[20px] h-[20px]  rounded-full text-[#0047a7] justify-center items-center flex absolute top-0 right-0 text-[14px] sm:text-[16px]  ">
                  6
                </p>
              </div>
              <p className="font-medium sm:text-[22px] text-[19px]">
                Receive Your Ticket
              </p>
              <p className="text-gray-500 max-w-[350px] ">
                Once confirmed, your ticket is generated and sent to your email
                instantly
              </p>
            </div>
          </div>
          <div className="border rounded-[20px] p-7 my-10 ">
            <div className="flex flex-wrap gap-3 justify-between items-center">
              <div className="flex flex-wrap gap-3 items-center ">
                <div className="bg-[#0047a7] sm:w-[65px] sm:h-[65px]  w-[50px] h-[50px] rounded-full flex justify-center items-center  text-white ">
                  <p>
                    <Ticket className="sm:w-8 sm:h-8 w-5 h-5  " />
                  </p>
                </div>
                <div className="text-left flex flex-col gap-2 ">
                  <p className="sm:text-[25px] text-[19px] font-bold ">
                    Need Help with Your Booking?
                  </p>
                  <p className="text-[14px] sm:text-[16px]">
                    Our customer support team is available 24/7 to assist you
                    with your shuttle bus ticket booking
                  </p>
                </div>
              </div>

              <div className="flex items-left">
                <button className="bg-[#0047a7] sm:px-4 sm:py-2 py-[6px] px-3 text-[14px] sm:text-[16px] rounded-lg font-semibold text-white hover:bg-[#0048a7e9] transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer">
                  Contact Support
                </button>
              </div>
            </div>
          </div>

          <div className="mt-[65px]">
            <div className="sm:py-[30px] py-3 ">
              <h2 className="sm:text-[35px] text-[25px] font-bold ">
                Why Choose Us
              </h2>
              <p className="sm:text-[19px] text-[15px] font-semibold text-gray-500 ">
                Experience the difference with Danraph Ecocruise
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f9fc] sm:px-10 px-2">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-6 sm:px-5 px-2 pb-20">
          <div className="text-left border border-gray-400 p-5 rounded-lg hover:shadow-md shadow-sm hover:shadow-gray-500 shadow-gray-300 duration-200 transition-all">
            <div className="bg-[#0047a7] w-[45px] h-[45px] flex flex-col justify-center items-center text-white rounded-lg  ">
              <Shield className="w-7 h-7" />
            </div>
            <p className="text-[20px] font-semibold py-[35px] ">
              Safe & Secure
            </p>
            <p className="text-gray-500">
              Your safety is our priority with regular maintenance and trained
              drivers
            </p>
          </div>

          <div className="text-left border border-gray-400 p-5 rounded-lg hover:shadow-md shadow-sm hover:shadow-gray-500 shadow-gray-300 duration-200 transition-all">
            <div className="bg-[#0047a7] w-[45px] h-[45px] flex flex-col justify-center items-center text-white rounded-lg  ">
              <Clock className="w-7 h-7" />
            </div>
            <p className="text-[20px] font-semibold py-[35px] ">
              On-Time Service
            </p>
            <p className="text-gray-500">
              Punctual departures and arrivals to keep your schedule on track
            </p>
          </div>

          <div className="text-left border border-gray-400 p-5 rounded-lg hover:shadow-md shadow-sm hover:shadow-gray-500 shadow-gray-300 duration-200 transition-all">
            <div className="bg-[#0047a7] w-[45px] h-[45px] flex flex-col justify-center items-center text-white rounded-lg  ">
              <Leaf className="w-7 h-7" />
            </div>
            <p className="text-[20px] font-semibold py-[35px] ">Eco-Friendly</p>
            <p className="text-gray-500">
              Sustainable travel with our modern, fuel-efficient fleet
            </p>
          </div>

          <div className="text-left border border-gray-400 p-5 rounded-lg hover:shadow-md shadow-sm hover:shadow-gray-500 shadow-gray-300 duration-200 transition-all">
            <div className="bg-[#0047a7] w-[45px] h-[45px] flex flex-col justify-center items-center text-white rounded-lg  ">
              <CreditCard className="w-7 h-7" />
            </div>
            <p className="text-[20px] font-semibold py-[35px] ">Easy Booking</p>
            <p className="text-gray-500">
              Quick and simple ticket generation with instant confirmation
            </p>
          </div>
        </div>
      </section>
      <section className="text-center px-3 pt-10 sm:pt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="sm:text-[45px] text-[30px] font-bold ">
            Frequently Asked Questions
          </h2>
          <p className="font-medium text-[14px] sm:text-[16px] text-gray-500 ">
            Everything you need to know about booking your Danraph Ecocruise
            shuttle bus ticket
          </p>

          <div className="sm:py-20 py-10 flex flex-col gap-5 ">
            {faqs.map((item, i) => {
              const open = openIndex === i;
              return (
                <div
                  key={i}
                  className={`border border-gray-400 rounded-[10px] text-left hover:border-gray-600 duration-300 transition-all w-full ${
                    open ? "" : ""
                  }`}
                >
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={open}
                    onClick={() => toggle(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") toggle(i);
                    }}
                    className="flex gap-3 justify-between items-center p-3 py-[15px] cursor-pointer hover:bg-gray-100 rounded-t-[12px] duration-300 transition-all "
                  >
                    <h2 className="font-semibold sm:text-[19px] text-[17px] ">
                      {item.q}
                    </h2>
                    <p>{open ? <ChevronUp /> : <ChevronDown />}</p>
                  </div>

                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                      open ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div
                      className={`${
                        open ? "p-3 pt-0 opacity-100" : "p-0 opacity-0"
                      } text-gray-400 text-[14px] transition-opacity duration-200 ease-in-out`}
                    >
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center pb-[100px]  px-3  ">
        <div className="flex flex-col justify-center items-center text-center gap-3 max-w-[900px] w-full py-5 rounded-lg px-2  border border-[#0048a74a] bg-[#f5f9fc]">
          <h2 className="sm:text-[25px] text-[20px] font-bold">Still have questions?</h2>
          <p className="font-medium text-gray-500 text-[14px] sm:text-[16px] ">Our customer support team is here to help you 24/7</p>

          <button className="bg-[#0047a7] sm:px-4 sm:py-2 py-[6px] px-3 text-[14px] sm:text-[16px] rounded-lg font-semibold text-white hover:bg-[#0048a7e9] transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
