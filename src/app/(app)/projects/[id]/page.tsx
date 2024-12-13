import { ProjectById } from "src/components/project/projectById";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const slug = (await params).id;
  return (
    <>
      <ProjectById id={slug} />
    </>
  );
}
