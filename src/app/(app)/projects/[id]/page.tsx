import { ProjectById } from "src/components/project/projectById";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <ProjectById id={params.id} />
    </>
  );
}
