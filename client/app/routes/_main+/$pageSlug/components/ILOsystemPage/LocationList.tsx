interface Location {
  id: number;
  name: string;
  address: string;
  hotline: string;
  videoUrl: string;
}

interface LocationListProps {
  locations: Location[];
  selectedLocation: Location;
  onLocationSelect: (location: Location) => void;
}

export default function LocationList({
  locations,
  selectedLocation,
  onLocationSelect,
}: LocationListProps) {
  return (
    <div className='space-y-6 bg-[#f8f8f8] p-8 rounded-lg'>
      {locations.map((location) => (
        <div
          key={location.id}
          className={`cursor-pointer transition-all duration-300 
                ${
                  selectedLocation.id === location.id
                    ? 'opacity-100'
                    : 'opacity-70 hover:opacity-100'
                }`}
          onClick={() => onLocationSelect(location)}
        >
          <h3 className='text-xl font-bold text-[#333] mb-2'>
            {location.name}
          </h3>
          {location.address && (
            <p className='text-[#696969] text-base mb-2'>{location.address}</p>
          )}
          {location.hotline && (
            <p className='text-[#696969] text-base'>
              Hotline: {location.hotline}
            </p>
          )}
          {location.id !== locations.length && (
            <hr className='my-6 border-gray-200' />
          )}
        </div>
      ))}
    </div>
  );
}
