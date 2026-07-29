import { useMediaQuery } from "../utils/useMediaQuery";
import { MainSection } from "./MainSection";
import { PhotoSection } from "./PhotoSection";

export function Main() {
  const isLarge = useMediaQuery("(max-width: 64rem)");
  
  return (
    <main className="flex-1 flex gap-4 p-1 lg:p-4">
      <MainSection isLarge={isLarge} />
      <PhotoSection isVisible={!isLarge} />
	  </main>
  )
}