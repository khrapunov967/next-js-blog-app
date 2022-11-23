
const CommentItem = ({comment}) => {
    return (
        <div className="w-full max-w-[50%]">
            <div className="p-2 rounded-xl rounded-br-none border-2">
                <p className="">
                    {comment.body}
                </p>
            </div>

            <div className="w-full flex justify-end">
                <p className="text-stone-600">
                    From: {comment.email}
                </p>
            </div>
        </div>
    );
};

export default CommentItem;