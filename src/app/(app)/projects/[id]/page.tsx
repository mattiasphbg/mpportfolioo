import { ProjectById } from "src/components/project/projectById";

interface PageProps<T> {
  params: T;
}

export default function Page({ params }: PageProps<{ id: string }>) {
  return (
    <>
      <ProjectById id={params.id} />
    </>
  );
}
