import { Link } from '@remix-run/react';
import { getImages } from '~/services/image.server';
import { getPosts } from '~/services/page.server';
import HandsomeError from '~/components/HandsomeError';
import { useLoaderData } from '@remix-run/react';
import MainSlider from './MainSlider';

export const loader = async () => {
  const sliders = [
    { img_name: 'banner.jpg' },
    { img_name: 'banner-bottom.png' },
    { img_name: 'dang-ky.png', img_title: 'Image 2' },
    { img_name: 'banner-bottom.png', img_title: 'Image 3' },
    { img_name: 'dang-ky.png', img_title: 'Image 4' },
  ];
  const posts = await getPosts();

  const limitedSliders = sliders.slice(0, 5);

  return { sliders: limitedSliders, posts };
};

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <main className="w-full flex justify-center">
      <div className="w-full max-w-[1903px]">
        <MainSlider />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Cơ sở vật chất */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-[200px] object-cover"
              src="/assets/csvc.jpg"  // replace with dynamic image URL
              alt="Cơ sở vật chất"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Cơ sở vật chất</h3>
              <p className="text-gray-600 mt-2">Khám phá cơ sở vật chất của ILO.</p>
              <Link
                to="/co-so-vat-chat"
                className="text-green-700 mt-4 inline-block font-bold hover:text-green-900"
              >
                Xem thêm &rarr;
              </Link>
            </div>
          </div>

          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-[200px] object-cover"
              src="/assets/cth.jpg"  
              alt="Chương trình học"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Chương trình học</h3>
              <p className="text-gray-600 mt-2">Tìm hiểu về chương trình học tại ILO.</p>
              <Link
                to="/chuong-trinh-hoc"
                className="text-green-700 mt-4 inline-block font-bold hover:text-green-900"
              >
                Xem thêm &rarr;
              </Link>
            </div>
          </div>

        
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-[200px] object-cover"
              src="/assets/ilo.jpg"  
              alt="Hệ thống ILO"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Hệ thống ILO</h3>
              <p className="text-gray-600 mt-2">Khám phá hệ thống ILO tại các cơ sở.</p>
              <Link
                to="/he-thong-ilo"
                className="text-green-700 mt-4 inline-block font-bold hover:text-green-900"
              >
                Xem thêm &rarr;
              </Link>
            </div>
          </div>

          {/* Other */}

        </div>
      </div>
    </main>
  );
}

export const ErrorBoundary = () => <HandsomeError />;
