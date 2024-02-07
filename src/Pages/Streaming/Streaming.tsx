import { MainComponent } from "../../Components/Main/Main";
import { VideoPlayerComponent } from "../../Components/VideoPlayer/VideoPlayer";

interface Props{
  headerForceBackground: Function
}

export function StreamingPage(props: Props) {
  props.headerForceBackground()

  return ( 
    <>
      <MainComponent headerMargin>
        {/* <VideoPlayerComponent/> */}
        <video muted autoPlay src="https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_adv_example_hevc/master.m3u8" controls playsInline>
        </video>
      </MainComponent>
    </>
  );
}