import { FC } from "react";

interface CommentCardProps{
  comment:any
}

export const CommentCard:FC<CommentCardProps> = ({comment}) => {
  return(
    <div className="d-flex justify-content-between align-items-center my-2 mx-1">
			<img
				style={{ height: 37.5, width: 37.5 }}
				src={comment.user.avatar}
				className="rounded-circle"
			/>
			<div className="flex-grow-1 mx-3">
        <div className="w-100 py-2">{comment.comment}</div>
			</div>
		</div>
  )
}
export default CommentCard