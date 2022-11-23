import CommentItem from "./CommentItem";

const CommentsContainer = ({comments}) => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">
                Comments
            </h2>

            <div className="flex flex-col gap-2 items-center">
                {
                    comments.map(comment => <CommentItem comment={comment} key={comment.id} />)
                }
            </div>
        </div>
    );
};

export default CommentsContainer;