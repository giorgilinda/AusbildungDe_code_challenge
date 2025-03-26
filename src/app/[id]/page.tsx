import ClientWrapper from "./(components)/ClientWrapper";

type IIndexProps = {
  params: Promise<{ id: string }>;
};

export default async function Index(props: IIndexProps) {
  return <ClientWrapper id={(await props.params).id} />;
}
