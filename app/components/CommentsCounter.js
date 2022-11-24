import CommentIcon from "./UI/CommentIcon";

const CommentCounter = ({count}) => {
    return (
        <div className="flex gap-1">
            <CommentIcon />

            <p className="text-stone-600">
                {count}
            </p>
        </div>
    );
};

export default CommentCounter;