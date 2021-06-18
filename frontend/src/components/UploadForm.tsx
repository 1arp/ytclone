import { FC, useState } from "react";
import api from "../utils/api";

export const UploadForm: FC = () => {
	const [videoUrl, setVideoUrl] = useState<string>();
	const [title, setTitle] = useState<string>();
	const [description, setDescription] = useState<string>();

	const [isUploaded, setIsUploaded] = useState<boolean>(false);

	const handleFileChange = async (event) => {
		const file = event.target.files[0];
		const {
			data: { data: url },
		} = await api.post("/upload/presignedUrl");
		const presignedUrl = url;
		await fetch(presignedUrl as any, {
			method: "PUT",
			body: file,
		});
		setVideoUrl(presignedUrl.split("?")[0]);
		setIsUploaded(true);
	};

	const handlePublish = async (e) => {
		e.preventDefault();
		await api.post("/video/publish", {
			title,
			description,
			url: videoUrl,
      userId:"60c3e62a3b507de8b3c0af50"
		});
	};

	return (
		<div className="d-flex justify-content-center container">
			<form onSubmit={handlePublish}>
				<input type="file" onChange={handleFileChange} className="my-3"></input>
				{isUploaded && (
					<div className="" >
						<video className="w-100" src={videoUrl}></video>
          </div>
				)}
				<br></br>

				<label className="my-2">Title</label>
				<br></br>

				<input
					type="text"
					className="w-100"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<br></br>

				<label className="my-2">Description</label>
				<br></br>

				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					style={{ width: "100%" }}
				/>

				<br></br>
				<div className="d-flex justify-content-center my-2">
					<button type="submit" className="btn btn-primary">Publish</button>
				</div>
			</form>
		</div>
	);
};
