import { ChevronRight } from "lucide-react";
import Style from "./sectionWithItemList.module.css";
import ScrollContainer from "react-indiana-drag-scroll";
export default function SectionWithItemList({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className={Style.section}>
      <div className={Style.topBar}>
        <h4>{title}</h4>
        <div className={Style.linkBox}>
          <p>Voir tout</p>
          <ChevronRight />
        </div>
      </div>
      <ul className={Style.articleList}>
        <ScrollContainer className={Style.articleList}>
          {children}
        </ScrollContainer>
      </ul>
    </section>
  );
}
