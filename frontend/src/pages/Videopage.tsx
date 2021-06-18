import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import CommentsSection from "../components/CommentSection";
import LikesAndDislikes from "../components/LikesAndDislikes";
import { VerticalVideoList } from "../components/VerticalVideoList";
import api from "../utils/api";


export const VideoPage: FC = () => {
	const { id } = useParams<any>();
  const [video,setVideo] = useState<any>()
  useEffect(()=>{
    (async()=>{
      const {data: {data:response}} = await api.get(`/video/${id}`)
      setVideo(response)
    })()
  },[id])
  if(!video)return(<>loading</>)
	return (
		<div className="row mx-5">
			<div className="col-8">
				<div className="my-4">
					<video
						src={video.url}
						controls
						className="w-100"
					></video>
				</div>

				<div className="d-flex mx-3 justify-content-between align-items-center">
					<div className="d-flex">
						<img
							style={{ height: 75, width: 75 }}
							src={video.user.avatar}
							className="rounded-circle"
						/>
						<div className="mx-4">
							<h4>{video.title}</h4>
							{video.user.name}
						</div>
					</div>

					<div className="d-flex align-items-center">
            <LikesAndDislikes/>
						<button className="btn btn-danger mx-3">Subscribe</button>
					</div>
				</div>
				<div className="row">
					<div className="col-1"></div>{" "}
					<div className="col-8 ms-3">{video.description}</div>
				</div>

				<div className="my-4 mx-4">
					<h4>Comments</h4>
					<CommentsSection videoId={id} />
				</div>
			</div>
			<div className="col-4">
				<VerticalVideoList />
			</div>
		</div>
	);
};

export default VideoPage;
