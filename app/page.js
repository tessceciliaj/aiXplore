import Header from "./components/Header";
import Heading from "./components/Heading";
import Categories from "./components/Categories";

export default function Home() {

  return (
    <main className="section">
      <Header btnText="Get In Touch" />
      <Heading text1="weXplore" text2="My toolbox" text3="You explore" />
      <Categories />
    </main>
  );
}
