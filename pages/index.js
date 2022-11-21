import PostsContainer from "../components/PostsContainer";

export default function Home() {
  return (
    <section className="w-full max-w-[1600px] my-0 mx-auto pb-10">
      <main className="my-0 mx-auto w-[60%] flex flex-col items-center px-10">
        <h2 className="text-4xl font-semibold mb-10">
          All Posts
        </h2>

        <PostsContainer />
      </main>
    </section>
  )
}
