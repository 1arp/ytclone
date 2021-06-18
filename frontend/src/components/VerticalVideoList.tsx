import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";

export const VerticalVideoList: FC = () => {
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

	const renderList = videos.map((video:any) => {
		return (
      <Link to={`/video/${video._id}`} >
			<div className="d-flex my-4 mx-5">
				<video
					src={video.url}
					className="w-100"
				></video>
			</div>
      </Link>
		);
	});
	return <div className="">{renderList}</div>;
};
