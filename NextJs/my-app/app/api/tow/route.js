export default function Get(request) {
  const data = [
    { vehicle: "car", model: "Toyota", year: 2020 },
    { vehicle: "bike", model: "Yamaha", year: 2019 },
    { vehicle: "truck", model: "Ford", year: 2018 },
    { vehicle: "scooter", model: "Vespa", year: 2021 },
  ];

  console.log(request);

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
