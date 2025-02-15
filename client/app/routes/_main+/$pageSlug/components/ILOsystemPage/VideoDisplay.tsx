interface Location {
  id: number;
  name: string;
  address: string;
  hotline: string;
  videoUrl: string;
}

interface VideoDisplayProps {
  location: Location;
}

export default function VideoDisplay({ location }: VideoDisplayProps) {
  return (
    <div className='w-full aspect-video rounded-lg overflow-hidden shadow-lg'>
      <iframe
        width='100%'
        height='100%'
        src={location.videoUrl}
        title={`Video ${location.name}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        className='w-full h-full'
      />
    </div>
  );
}
