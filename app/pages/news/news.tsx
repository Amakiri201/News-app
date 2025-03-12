import { NewsDesktop } from "./news-desktop";
import { NewsMobile } from "./news-mobile";

export function News() {
  return (
    <main className="flex flex-col h-screen">
      <div className="lg:hidden">
        <NewsMobile />
      </div>
      <div className="max-lg:hidden">
        <NewsDesktop />
      </div>
    </main>
  );
}
