import Feed from "@/components/feed";

export default function Home() {
  return (
    <section className="flex-col flex-center w-full">
      <h1 className="text-center head_text">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient"> AI-Powered Prompts</span>
      </h1>
      <p className="text-center desc">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed />
    </section>
  );
}
