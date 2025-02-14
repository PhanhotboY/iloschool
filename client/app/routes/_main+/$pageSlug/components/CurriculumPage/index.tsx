import { IPageDetail } from '~/interfaces/page.interface';
import Banner from '../Banner';
import Divider from '../Divider';
import ProgramFramework from './ProgramFramework';
import Workforce from './Workforce';
import ADayAtSchool from './ADayAtSchool';

export default function CurriculumPage({ page }: { page: IPageDetail }) {
  return (
    <main className='space-y-20'>
      <Banner page={page} />

      <Divider />

      <ProgramFramework />

      <Workforce />

      <ADayAtSchool />
    </main>
  );
}
