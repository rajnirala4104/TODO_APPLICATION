import React from "react";
import { InputSection } from "../components/InputSection";
import { ShowAddedList } from "../components/ShowAddedList";

export const Home = () => {
  return (
    <>
      <section className="min-h-[80vh]">
        <InputSection />
        <hr className="max-w-[65%] mx-auto" />
        <ShowAddedList />
      </section>
    </>
  );
};
