import Camera_bar from "@/app/check_device/components_check/Camera_bar";
import { Button } from "@/components/ui/button";
import {
  LucidePhoneCall,
  Menu,
  MessagesSquareIcon,
  Mic,
  MicOff,
  Video,
  VideoOff,
} from "lucide-react";
import React, { lazy, useEffect, useRef, useState } from "react";
import Video_Feed from "./video_feed";
import Static_ChatBot from "./Static_chat_robo";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import Thinking_Robo from "./Thinking_robo";

export default function Video_BOX() {
  const [is_camera_on, set_is_camera_on] = useState<boolean>(false);
  const [is_mic_on, set_is_mic_on] = useState<boolean>(false);
  const [is_ai_responding, set_is_ai_responding] = useState<boolean>(true);

  return (
    <div className="flex-1/3">
      <div className="h-full w-full items-center justify-center flex p-1.5 ">
        <div className="h-full w-full rounded-lg bg-[#1C1C1F]">
          <div className="flex-[1] h-5/6">
            <div className="flex h-full">
              <div className="bg-black flex-1/2 m-1 mr-0 w-full rounded-[26px] p-2">
                {/* AI CALL BOX */}
                <NeonGradientCard borderSize={3}>
                  <div className=" rounded-[26px] bg-[#1C1C1F]">
                    <div className="">
                      {is_mic_on ? <Thinking_Robo /> : <Static_ChatBot />}
                    </div>
                  </div>
                </NeonGradientCard>
              </div>
              <div className="bg-black flex-1/2 m-1 w-full rounded-[26px]">
                {/* Human call box */}
                {is_camera_on ? (
                  <Video_Feed need_video={true} />
                ) : (
                  <Video_Feed need_video={false} />
                )}
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center items-center">
            {/* Call Element here */}
            <div className="bg-[#121111] flex items-center justify-evenly w-2xs rounded-md h-9.5">
              <Button className="hover:bg-[#212121]">
                <Menu></Menu>
              </Button>
              <Button
                className="hover:bg-[#212121]"
                onClick={() => set_is_camera_on(!is_camera_on)}
              >
                {is_camera_on ? <Video /> : <VideoOff />}
              </Button>
              <Button className="bg-red-700 hover:bg-red-800">
                <LucidePhoneCall />
              </Button>
              <Button
                className="hover:bg-[#212121]"
                onClick={() => set_is_mic_on(!is_mic_on)}
              >
                {is_mic_on ? <Mic /> : <MicOff />}
              </Button>
              <Button className="hover:bg-[#212121]">
                <MessagesSquareIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
