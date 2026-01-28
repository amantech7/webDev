
export default async function Page({ params }) {
  const { slug } = await params;

  return (
    <div>
      <h1>data from param is {slug}</h1>
      <div>product id page</div>
    </div>
  );
}
