import Cart from "./Cart";

export default function Header() {
  return (
    <>
      <header
        className="bg-slate-800 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/img/header.jpg')" }}
      >
        <div className="md:flex md:justify-between md:items-center container mx-auto p-10 ">
          <h1 className="mb-2.5 md:mb-0 font-black text-xl text-sky-100 uppercase text-center md:text-left">
            <span className="text-sky-300 text-2xl md:text-4xl ">guitar</span>hub
          </h1>

          <Cart />
        </div>
      </header>
    </>
  );
}
