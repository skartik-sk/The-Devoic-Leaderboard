import React from "react";
import {Tabs, Tab} from "@nextui-org/react";
import Leaderboard from "./Leaderboard";
// import {GalleryIcon} from "./GalleryIcon";
// import {MusicIcon} from "./MusicIcon";
// import {VideoIcon} from "./VideoIcon";

export default function Tad({data}) {
    const splitData = (data) => {
        const webData = data.filter(item => item.department === 'WEB');
        const graphicsData = data.filter(item => item.department === 'GRAPHICS');
        const videoData = data.filter(item => item.department === 'VIDEO');
        const mediaData = data.filter(item => item.department === 'MEDIA');
        const dsaData = data.filter(item => item.department === 'DSA');

        return {
            webData,
            graphicsData,
            videoData,
            mediaData,
            dsaData
        };
    };

    const { webData, graphicsData, videoData, mediaData, dsaData } = splitData(data);
  return (
    <div className="flex w-full flex-col z-10">
      <Tabs aria-label="Options" color="primary" variant="bordered" radius="lg" size="lg" placement="bottom">
        <Tab
          key="Web"
          title={
            <div className="flex items-center space-x-2">
              {/* <GalleryIcon/> */}
              <span>Web</span>
            </div>
          }
        >
            <Leaderboard data= {webData}/>
        </Tab>
        <Tab
          key="DSA"
          title={
            <div className="flex items-center space-x-2">
              {/* <MusicIcon/> */}
              <span>DSA</span>
            </div>
          }
        >
            <Leaderboard data= {dsaData}/>
        </Tab>
        <Tab
          key="Video"
          title={
            <div className="flex items-center space-x-2">
              {/* <VideoIcon/> */}
              <span>Video</span>
            </div>
          }
        >
             <Leaderboard data= {videoData}/>
            </Tab> <Tab
          key="Graphics"
          title={
            <div className="flex items-center space-x-2">
              {/* <VideoIcon/> */}
              <span>Graphics</span>
            </div>
          }
        > <Leaderboard data= {graphicsData}/></Tab> <Tab
          key="Media"
          title={
            <div className="flex items-center space-x-2">
              {/* <VideoIcon/> */}
              <span>Media</span>
            </div>
          }
        > <Leaderboard data= {mediaData}/></Tab>
      </Tabs>
    </div>  
  );
}
