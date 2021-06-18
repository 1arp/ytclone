import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";

export const VideoListPage: FC = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		(async () => {
			const {
				data: { data: response },
			} = await api.get("/video");
			setVideos(response);
			console.log(response);
		})();
	}, []);
	if (!videos.length) return <>loading</>;
	const renderVideoList =
		videos.length &&
		videos.map((video: any) => {
			const { user } = video;
			return (
        <Link to={`/video/${video._id}`}>
				<div className="col-4">
					<video src={video.url} className="w-100" />
					<div className="my-2 d-flex align-items-center">
						<img
							style={{ height: 37.5, width: 37.5 }}
							src={user.avatar}
							className="rounded-circle"
						/>
						<div className="mx-3">
							<h5 className="my-1">{video.title}</h5>

							{video.user?.name}
						</div>
					</div>
				</div>
        </Link>
			);
		});
	return <div className="row">{renderVideoList}</div>;
};

export default VideoListPage;
