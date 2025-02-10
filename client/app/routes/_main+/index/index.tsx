import HandsomeError from '~/components/HandsomeError';
import MainSlider from './MainSlider';
import { getImages } from '~/services/image.server';

import { getPosts } from '~/services/page.server';

export const loader = async () => {
  const sliders = await getImages();
  const posts = await getPosts();
  console.log('posts', posts);
  return { sliders, posts };
};

export default function Index() {
  return (
    <main className='grid grid-cols-12 gap-y-8 md:gap-y-12 lg:gap-y-16'>
      <MainSlider />
    </main>
  );
}

export const ErrorBoundary = () => <HandsomeError />;
