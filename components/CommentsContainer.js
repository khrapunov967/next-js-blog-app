import CommentItem from "./CommentItem";

const CommentsContainer = () => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">
                Comments
            </h2>

            <div className="flex flex-col gap-2">
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </div>
        </div>
    );
};

export default CommentsContainer;