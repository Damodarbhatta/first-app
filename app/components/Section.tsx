import HeroImg from "./HeroImg";

export default function Section() {
  return (
    <main className="overflow-hidden relative">
      <section className="flex relaltive  overflow-hidden z-[10]">
        <div className="text-left w-1/2 ml-[90px] mt-[90px] flex flex-col gap-4">
          <h3 className="text-2xl">Home solar Loans</h3>
          <h1 className="text-4xl">Maximize Your Rooftop Realstate</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            quaerat voluptatem possimus qui obcaecati, quos veniam quo atque ex
            mollitia minima repellendus asperiores debitis sunt voluptate
            distinctio delectus totam reiciendis eveniet sed neque officiis.
          </p>
          <button className="border-2 border-black-900 bg-black text-white w-fit py-2 px-4 rounded-md font-bold">
            Learn More
          </button>
        </div>
        <div className="h-[55rem] w-[55rem] rounded-full bg-yellow-300 absolute -z-10 -right-[15rem] -bottom-[39rem]" />
        <div className="h-full h-[65vh] w-[25vw] flex items-center justify-center">
          <HeroImg />
        </div>
      </section>
    </main>
  );
}
