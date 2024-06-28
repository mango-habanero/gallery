import NavBar from "@components/nav-bar";


export default async function Home() {
  return (
      <div className="flex flex-col">
          <NavBar/>
          <main className="flex-grow p-2.5 gap-2.5">
          </main>
      </div>
  );
}
