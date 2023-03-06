import styled from "./page.module.css";

import MainHome from "@/components/MainHome";
import GridCards from "@/components/GridCards";
import NewsBlog from "@/components/NewsBlog";

export default function Home() {
  return (
    <div className={styled.app}>
      <MainHome></MainHome>
      <GridCards></GridCards>
      <NewsBlog></NewsBlog>
    </div>
  );
}
