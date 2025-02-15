import { IPageDetail } from '~/interfaces/page.interface';
import ClassRoom from './ClassRoom';
import Playground from './Playground';
import DiningRoom from './DiningRoom';
import ImaginationRoom from './ImaginationRoom';
import Library from './Library';
import Divider from '../Divider';
export default function FacilitiesPage({ page }: { page: IPageDetail }) {
  return (
    <main className='space-y-20'>
      <Divider />
      <ClassRoom />
      <Playground />
      <DiningRoom />
      <ImaginationRoom />
      <Library />
    </main>
  );
}
