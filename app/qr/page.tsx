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
    <main className="flex min-h-screen flex-col items-center p-96">
      {/* <form action="/api/charge" method="POST" onSubmit={(e) => create(e, params.forumId)}> */}
      <form onSubmit={create}>
        <div className="mb-6">
          <label
            htmlFor="number"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="In Sats"
            required
          ></input>
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            1st LN Address
          </label>
          <input
            type="email"
            id="LN1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@zbd.gg"
            required
          ></input>
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            2nd LN Address
          </label>
          <input
            type="email"
            id="LN2"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@zbd.gg"
            required
          ></input>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Pay
        </button>
      </form>
    </main>
  );
}
