import { FC } from "react";
import VideoListPage from "../components/VideoListPage";

export const HomePage:FC = () => {
  return(
    <div className="mx-5">
      <h3 >Recommended</h3>
      <div className="my-3">
        <VideoListPage/>
      </div>
    </div>
  )
}
export default HomePage