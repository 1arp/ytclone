import { FC, useEffect, useState } from "react";
import api from "../utils/api";
import { CommentCard } from "./CommentCard";

interface CommentSectionProps {
	videoId: number;
}

export const CommentsSection: FC<CommentSectionProps> = ({ videoId }) => {
	const [comment, setComment] = useState("");
	const [comments, setComments] = useState([]);
  const [reload, setReload] = useState<boolean>(false)

	useEffect(() => {
		(async () => {
			const {
				data: { data: response },
			} = await api.get(`/comment/${videoId}`);
			setComments(response)
		})()
	}, [reload]);

	const handleCommentSubmit = async(e) => {
		e.preventDefault();
    await api.post('/comment',{
      userId: "60c3e62a3b507de8b3c0af50",
      videoId,
      comment,
    })
    setComment('')
    setReload(!reload)
	};

  if(!comments.length) return(<>loading</>)

	const renderComments = comments.map((comment) => {
		return (
			<div className="">
				<CommentCard comment={comment}/>
			</div>
		);
	});
	return (
		<>
			{renderComments}
			<div className="d-flex justify-content-between align-items-center">
				<img
					style={{ height: 50, width: 50 }}
					src="https://i.guim.co.uk/img/media/d31ebd49b32a5aa609a584ababb1e03bc70b4942/573_213_2929_1758/master/2929.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=a54fc963e39dd6645fce012663ed13c1"
					className="rounded-circle"
				/>
					<div className="flex-grow-1 mx-3">
						<input type="text" className="form-control w-100 py-2" value={comment} onChange={(e) => setComment(e.target.value)}/>
					</div>
					<button className="btn btn-primary" onClick={handleCommentSubmit}>Post</button>
			</div>
		</>
	);
};
export default CommentsSection;
