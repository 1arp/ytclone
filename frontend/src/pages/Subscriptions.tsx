import { FC } from "react";
import VideoListPage from "../components/VideoListPage";

export const Subscriptions:FC = () => {
  return(
    <div className="mx-5">
      <h3 >Subscriptions</h3>
      <div className="my-3">
        <VideoListPage/>
      </div>
    </div>
  )
}