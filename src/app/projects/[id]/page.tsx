import { ProjectById } from "src/components/project/projectById";

export default function Page({ params }: { params: { id: string } }) {
  const isProduction = process.env.NODE_ENV === "production";
  return (
    <>
      <ProjectById id={`${params.id}`} />
    </>
  );
}
