export default async function categories() {
  console.log("PAGE START");

  const data = await getAllCategory();

  console.log("DATA:", data);

  return <div>TEST</div>;
}