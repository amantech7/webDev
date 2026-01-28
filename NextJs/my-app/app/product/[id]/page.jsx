export default async function Page({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1>data from param is {id}</h1>
      <div>product id page</div>
    </div>
  );
}
