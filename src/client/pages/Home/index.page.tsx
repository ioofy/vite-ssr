import React from "react";
import { useAppContext } from "~/client/context/AppContext";
import { Footer } from "~/client/components/Footer";
import { useFetchTodos } from "~/hooks/useFetch";

export const Homepage = () => {
  const { name, setName } = useAppContext();
  const { data, isLoading, isError } = useFetchTodos();

  return (
    <div className="flex bg-white-100 font-sans items-center flex-col justify-between h-screen">
      <div className="flex items-center flex-col pt-10">
        <h1 className="font-bold text-gray-900 text-5xl lg:text-7xl text-center ">Hi{name ? `, ${name}!` : ""}</h1>
        <h2 className="w-2/5 p-5 items-center flex text-center min-w-[210px] text-green-600">
          This App is blazing fast
        </h2>
        <input
          placeholder={"Enter your name"}
          onChange={e => setName(e.currentTarget.value)}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full text-2xl border-gray-300 rounded-md bg-[#8080802e] p-2"
        />
        <div className="mt-4">
          {isError && <p>Error</p>}
          <p className="text-center">Render API Data:</p>
          <span>{isLoading ? <p>Fetching your data..</p> : JSON.stringify(data)}</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};
