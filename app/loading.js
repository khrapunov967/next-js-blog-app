import Loader from "./components/UI/Loader";

const LoadingUserPage = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center max-w-[1600px] my-0 mx-auto">
            <div className="absolute top-[50%] left-[50%]">
                <Loader />
            </div>
        </section>
    );
};

export default LoadingUserPage;