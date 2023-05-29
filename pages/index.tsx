import GetGarageWithItems from '@/lib/getGarageWithItems';

export default function Home() {
  const { garage, isLoading, mutate } = GetGarageWithItems();
  if (!garage) return <div>Garasjen er tom...</div>;

  const totalLength = garage?.items.length + garage?.vehicle.length;

  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen h-64 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Garage!</h1>
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <p className="text-lg mb-2 font-semibold">
            Total Items in Garage: {totalLength}
          </p>
        </div>
      </div>
    </main>
  );
}
