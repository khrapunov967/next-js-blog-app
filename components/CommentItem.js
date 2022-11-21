
const CommentItem = () => {
    return (
        <div className="w-fit">
            <div className="p-2 rounded-xl rounded-br-none border-2">
                <p className="">
                    Comment Body Comment Body Comment Body Comment Body
                    Comment Body Comment Body
                </p>
            </div>

            <div className="w-full flex justify-end">
                <p className="text-stone-600">
                    From: user@gmail.com
                </p>
            </div>
        </div>
    );
};

export default CommentItem;