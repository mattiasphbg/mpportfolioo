import { ProjectById } from "src/components/project/projectById";

export default function Page({ params }: { params: { title: string } }) {
  return (
    <>
      <ProjectById id={`${params.title}`} />
    </>
  );
}
