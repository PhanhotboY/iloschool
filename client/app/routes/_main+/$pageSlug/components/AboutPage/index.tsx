import { IPageDetail } from '~/interfaces/page.interface';
import Banner from '../Banner';
import VisionAndMission from './VisionAndMission';
import CoreValues from './CoreValues';
import Features from './Features';

export default function AboutPage({ page }: { page: IPageDetail }) {
  return (
    <main className='space-y-40'>
      <Banner page={page} />

      <VisionAndMission />

      <CoreValues />

      <Features />
    </main>
  );
}
