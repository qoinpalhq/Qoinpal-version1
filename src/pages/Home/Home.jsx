import Hero from "../../components/Hero/Hero";
import Cta from "../../components/Cta/Cta";
import JoinTeam from "../../components/JoinTeam/JoinTeam";
import SharedLayout from "../../components/SharedLayout";

export default function Home() {
  return (
    <SharedLayout>
      <main>
        <Hero />
        <Cta />
        <JoinTeam />
      </main>
    </SharedLayout>
  );
}
