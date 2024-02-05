import { BannerComponent } from "../../Components/Banner/Banner"
import { MainComponent } from "../../Components/Main/Main";
import { SectionOneComponent, SectionTwoComponent } from "./Sections";

export function IndexPage() {
  return ( 
    <>
      <MainComponent>

        <BannerComponent/>
        <SectionOneComponent/>
        <SectionTwoComponent/>
        {/* <VideoPlayerComponent/> */}
        
      </MainComponent>

    </>
  );
}