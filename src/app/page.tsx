import DragDropContextWrapper from "@/components/DragDropContextWrapper";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Drag and Drop Example</title>
      </Head>
      <main style={{ padding: "20px" }}>
        <h1>React Beautiful DnD with Next.js</h1>
        <DragDropContextWrapper />
      </main>
    </div>
  );
}
