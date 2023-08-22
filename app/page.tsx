"use client";
import { QR } from "@/components/QR";
import { useRouter } from "next/navigation";
import '@/styles/globals.css';

export default async function Buy() {
  const router = useRouter();

  const create = async (event: {
    preventDefault: () => void;
    target: {
      elements: {
        amount: { value: any };
        LN1: { value: any };
        LN2: { value: any };
      };
    };
  }) => {
    event.preventDefault();
    const amount = event.target.elements.amount.value;
    const LN1 = event.target.elements.LN1.value;
    const LN2 = event.target.elements.LN2.value;

    const res = await fetch("http://localhost:3000/api/charges", {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({
        amount: String(amount + "000"),
        description: "Pay spliting!",
        expiresIn: 300,
        callbackUrl: "http://localhost:3000/callback",
      }),
    });

    const response = await res.json();
    const { success, data } = response;

    router.push("/buy?invoice=" + data.invoice.uri + "&id=" + data.id + "&LN1=" + LN1 + "&LN2=" + LN2 + "&amount=" + amount);
  };

  return (
    <main style={{
      backgroundColor: "black",
      color: "white",
    }} className="w-full p-20 text-white">
      

      <div className="w-full ">

<div
  className="w-full rounded-sm bg-neutral-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white-200">
  <div className="border-b-2 border-[#0000002d] px-6 py-3 text-black">

<h1 className="text-5xl font-bold">PAYMENT SPLITTING APP</h1>

<hr></hr>
  <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
      <form onSubmit={create}>
        <div className="mb-6 pt-5">
          <label
            htmlFor="number"
            className="text-black text-2xl p-1"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="bg-black border border-gray-300 text-white text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="In Sats"
            required
          ></input>
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-black text-2xl p-1"
          >
            1st LN Address
          </label>
          <input
            type="email"
            id="LN1"
            className="bg-black border border-gray-300 text-white text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@zbd.gg"
            required
          ></input>
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-black text-2xl p-1"
          >
            2nd LN Address
          </label>
          <input
            type="email"
            id="LN2"
            className="bg-black border border-gray-300 text-white text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@zbd.gg"
            required
          ></input>
        </div>

        <button
          type="submit"
          className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Pay
        </button>
      </form>
      </div>
    </div>
  </div>
</div>

  </div>

</div>


</div>



     

     
      <footer className="bg-black rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://zebedee.io" className="flex items-center mb-4 sm:mb-0">
                <img src="https://zbd.gg/new-logo/zbd-white.svg" className="h-10 mr-30" alt="ZBD Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 "></a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6"></a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 "></a>
                </li>
                <li>
                <a href="https://nbd.wtf" className="flex items-center mb-4 sm:mb-0">
                <img src="https://user-images.githubusercontent.com/1653275/194609043-0add674b-dd40-41ed-986c-ab4a2e053092.png" className="h-10 mr-30" alt="NBD Logo" />
            </a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"><iframe className="w-full" height="323" src="https://zbd.gg/embed/yoggyac7"></iframe></span>
    </div>
</footer>
      

    </main>
  );
}
