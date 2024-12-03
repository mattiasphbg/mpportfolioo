import { ProjectById } from "src/components/project/projectById";

export default function Page({ params }: { params: { id: number } }) {
  return (
    <>
      <ProjectById id={params.id} />
    </>
  );
}
