export default function ResultCard({ option }) {
  return (
    <div className="border p-4 rounded-lg shadow-md mb-4">
      <h3 className="font-bold text-lg">{option.transportType}</h3>
      <p>Destination: {option.destination}</p>
      <p>Price: ${option.price}</p>
      <p>Duration: {option.duration} mins</p>
      <p>Distance: {option.distance} km</p>
    </div>
  );
}
