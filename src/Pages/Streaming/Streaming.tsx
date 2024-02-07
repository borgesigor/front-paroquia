import { MainComponent } from "../../Components/Main/Main";
import { VideoPlayerComponent } from "../../Components/VideoPlayer/VideoPlayer";

export function StreamingPage() {
  return ( 
    <>
      <MainComponent headerMargin>
        <VideoPlayerComponent/>
      </MainComponent>
    </>
  );
}