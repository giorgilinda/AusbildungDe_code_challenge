import { JobProvider } from "@/contexts/jobContext";

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <JobProvider>{props.children}</JobProvider>
    </>
  );
}
