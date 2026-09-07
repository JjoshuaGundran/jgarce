import { useMediaQuery } from "../utils/useMediaQuery";
import { MainSection } from "./MainSection";
import { PhotoSection } from "./PhotoSection";

export function Main() {
  const isSmall = useMediaQuery("(max-width: 64rem)");
  
  return (
    <main className="flex-1 flex max-h-svh max-w-svw gap-4 p-1 lg:p-4">
      <MainSection isSmall={isSmall} />
      <PhotoSection isVisible={!isSmall} />
	  </main>
  )
}