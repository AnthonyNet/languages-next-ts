import MemoryCard from "../components/memoryCard/MemoryCard";

const cards = {
  
}

function Memory() {
  return (
    <section className="w-screen h-[90vh] flex flex-col items-center justify-center">
      <h3>Memory</h3>
      <article className="w-[80%] h-[90%] border-4 border-red-400 grid grid-cols-4 grid-rows-4 gap-4 grid-flow-row p-2">
        <MemoryCard />
        <div className="grid items-center justify-center border-2 border-red-300">
          02
        </div>
        <div className="grid items-center justify-center border-2 border-red-300">
          03
        </div>
        <div className="grid items-center justify-center border-2 border-red-300">
          04
        </div>
        <div className="grid items-center justify-center border-2 border-red-300">
          05
        </div>
        <div className="grid items-center justify-center border-2 border-red-300">
          06
        </div>
        <div className="grid items-center justify-center border-2 border-red-300">
          07
        </div>
        <div className="grid items-center justify-center border-2 border-red-300">
          08
        </div>
        <div className="grid items-center justify-center border-2 border-red-300">
          01
        </div>
        <div className="grid items-center justify-center border-2 border-red-300">
          02
        </div>
        <div className="grid items-center justify-center border-2 border-red-300">
          03
        </div>
        <div className="grid items-center justify-center border-2 border-red-300">
          04
        </div>
        <div className="grid items-center justify-center border-2 border-red-300">
          05
        </div>
        <div className="grid items-center justify-center border-2 border-red-300">
          06
        </div>
        <div className="grid items-center justify-center border-2 border-red-300">
          07
        </div>
        <div className="grid items-center justify-center border-2 border-red-300">
          08
        </div>
      </article>
    </section>
  );
}

export default Memory;
