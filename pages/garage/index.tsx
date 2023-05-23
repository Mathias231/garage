import GetGarageItems from '@/lib/getGarageItems';
import Image from 'next/image';

export default function Garage() {
  const DB_ID = '646c92b21f1d71f34789ba38';
  const { garage, isLoading, mutate } = GetGarageItems(
    typeof DB_ID === 'string' ? DB_ID : '1',
  );
  if (!garage) return <div>No items found</div>;

  const divStyle = {
    backgroundColor: garage.garageColor,
  };

  // Must add a redirect back to homepage if session.user.whiteListed is not true or session not set

  return (
    <main>
      <div className="flex justify-center items-center" style={divStyle}>
        <div className="p-4">
          <h1 className="text-xl font-bold">{garage.name}</h1>
          <p className="text-sm">Color: {garage.garageColor}</p>
        </div>
      </div>
      <div>
        {garage.items.map((item, i) => {
          return (
            <div key={i} className="bg-white">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  <a className="border">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <Image
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <h3 className="mt-1 text-lg font-medium text-gray-900 ">
                      Earthen Bottle
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      Weight: {item.weight}kg
                    </p>
                    <p className="mt-4 text-sm text-gray-700">
                      Durability: {item.durability}%
                    </p>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
