import Header from "./components/Header";
import { ItemCard } from "./components/ItemCard";
import { db } from "./data/db";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <Header />

      <main className="flex-1">
        <section className="py-11">
          <h1 className="text-center font-black capitalize text-3xl text-cyan-400">
            Our Selection
          </h1>
        </section>

        <section
          className="container mx-auto px-3 pb-48"
          aria-label="Product listing"
        >
          <ul
            className="grid grid-cols-1 min-[468px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            role="list"
          >
            {db.map((item) => (
              <li className="mx-auto" key={item.id}>
                <article>
                  <ItemCard item={item} />
                </article>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="p-10 bg-gray-800">
        <div className="container mx-auto">
          <p className="text-center text-cyan-400">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
