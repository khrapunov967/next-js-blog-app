import Header from "./Header";

const Layout = ({children}) => {
    return (
        <section>
            <div className="w-full flex justify-center bg-[#00000055] top-0 sticky z-20 mb-[90px]">
                <Header />
            </div>

            {children}
        </section>
    );
};

export default Layout;