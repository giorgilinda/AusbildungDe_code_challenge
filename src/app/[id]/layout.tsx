import { CustomerProvider } from "@/contexts/customerContext";
import { JobProvider } from "@/contexts/jobContext";

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <CustomerProvider>
        <JobProvider>{props.children}</JobProvider>
      </CustomerProvider>
    </>
  );
}
