import { ActionFunctionArgs } from '@remix-run/node';
import { authenticator } from '~/services/auth.server';
import { createImage } from '~/services/image.server';
import { getImageUrl } from '~/utils';

export const action = async ({ request }: ActionFunctionArgs) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/cmsdesk/login',
  });
  const body = await request.json();

  try {
    const res = await fetch(body.url);

    const blob = await res.blob();
    const file = new File([blob], body.url.split('/')[0], { type: blob.type });
    const formData = new FormData();
    formData.append('image', file);
    const image = await createImage(formData, user);

    return Response.json({
      image,
      success: 1,
      file: {
        url: getImageUrl(image[0].img_name),
      },
      toast: { message: 'Upload ảnh thành công!', type: 'success' },
    });
  } catch (error: any) {
    console.error(error);
    return Response.json({
      success: 0,
      toast: { message: error.message, type: 'error' },
    });
  }
};
