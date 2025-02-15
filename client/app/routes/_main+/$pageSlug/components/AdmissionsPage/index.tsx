import { IPageDetail } from '~/interfaces/page.interface';
import Banner from './Banner';
import Scholarship from './Scholarship';
import Divider from '../Divider';

export default function AdmissionsPage({ page }: { page: IPageDetail }) {
  return (
    <main className='space-y-20'>
      <Banner page={page} />
      <Divider />
      <Scholarship />
    </main>
  );
}
