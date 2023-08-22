"use client";
import PollingComponent from "@/components/PollingComponent";
import { QR } from "@/components/QR";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import '@/styles/globals.css';

export default function Buy() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const invoice = searchParams.get("invoice");
  const id = searchParams.get("id");
  const LN1 = searchParams.get("LN1");
  const LN2 = searchParams.get("LN2");
  const amount = searchParams.get("amount");
  const splitAmount = amount / 2;
  const [status, setStatus] = useState<any>("");

  useEffect(() => {
    const fetchChargeStatus = async () => {
      try {
        const res = await fetch(`https://api.zebedee.io/v0/charges/${id}`, {
          cache: "no-store",
          headers: {
            apikey: "sQQuaTntMd92j1if5GaIMRVvbqS84X4o",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const response = await res.json();
        setStatus(response.data.status);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const pollInterval = setInterval(() => {
      fetchChargeStatus();
    }, 3000); // Poll every 5 seconds (adjust as needed)

    return () => clearInterval(pollInterval); // Clear interval on component unmount
  }, [id]); // Add 'id' to the dependency array to re-run the effect when 'id' changes.

  useEffect(() => {
    if (status === "completed") {
      
      const fetchChargeStatus1 = async () => {
        try {
          const res = await fetch("https://api.zebedee.io/v0/ln-address/send-payment", {
            cache: "no-store",
            method: "POST",
            headers: {
              apikey: "sQQuaTntMd92j1if5GaIMRVvbqS84X4o",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              lnAddress: String(LN1),
              amount: String(splitAmount + "000"),
              comment: "Pay spliting!",
            }),
          });
          const response = await res.json();
          console.log(response);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      const fetchChargeStatus = async () => {
        try {
          const res = await fetch("https://api.zebedee.io/v0/ln-address/send-payment", {
            cache: "no-store",
            method: "POST",
            headers: {
              apikey: "sQQuaTntMd92j1if5GaIMRVvbqS84X4o",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              lnAddress: String(LN2),
              amount: String(splitAmount + "000"),
              comment: "Pay spliting!",
            }),
          });
          const response = await res.json();
          console.log(response);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchChargeStatus();
      fetchChargeStatus1();

      router.push("/blog");
    }
  }, [status, router]);

  return (
    <div style={{
      backgroundColor: "black",
      color: "white",
    }}>
    <div className="flex min-h-screen flex-col text-xl items-center font-bold p-50">
      <p className="p-10 text-5xl font-bold">Pay Invoice</p>
      <hr></hr>

      <div className="bg-white p-1"><QR class value={invoice} /></div>
      
      <p className="p-5">Amount: {amount} sats</p>
      <p className="p-10">The payment will split to: </p>


      <p>Lightning Address # 1: {LN1}</p>
      <p>Lightning Adrress # 2: {LN2}</p>
      <div>
        {status ? (
          <div>
            <p className="p-10"> Status: {status}</p>
          </div>
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </div>
      <a className="no-underline text-black block w-90 bg-white hover:bg-black-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-full text-xl px-20 py-2.5 text-center dark:focus:ring-blue-900" href={invoice}>Open in Wallet</a>


      </div>

      
    </div>



  );
}

