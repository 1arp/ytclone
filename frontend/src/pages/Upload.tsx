import { FC } from "react";
import { UploadForm } from "../components/UploadForm";

export const Upload: FC = () => {
	return (
		<>
			<div className="d-flex justify-content-center">
				<h3>Upload Video</h3>
			</div>
			<UploadForm />
		</>
	);
};
