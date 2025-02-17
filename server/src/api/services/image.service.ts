import { ImageModel } from '@models/image.model';
import {
  formatAttributeName,
  getReturnData,
  getReturnList,
  removeNestedNullish,
} from '@utils/index';
import { BadRequestError, NotFoundError } from '../core/errors';
import { IImageAttrs } from '../interfaces/image.interface';
import { IMAGE } from '../constants';
import { unlink } from 'fs/promises';

const getImages = async () => {
  const images = await ImageModel.find({}, ['-__v -img_description']).lean();
  return getReturnList(images);
};

const getImage = async (id: string) => {
  const image = await ImageModel.findById(id, ['-__v']).lean();
  if (!image) throw new NotFoundError('Image not found');

  return getReturnData(image);
};

const createImage = async (files?: Express.Multer.File[]) => {
  if (!files) throw new BadRequestError('No image uploaded');

  const newImage = [];
  for (const file of files) {
    const image = await ImageModel.build({
      name: file.filename,
      title: file.filename.split('.')[0],
    });
    newImage.push(image);
  }
  return getReturnList(newImage);
};

const updateImage = async (id: string, image: IImageAttrs) => {
  let updatedImage = await ImageModel.findOneAndUpdate(
    { _id: id },
    {
      ...formatAttributeName(removeNestedNullish(image), IMAGE.PREFIX),
    },
    { new: true }
  );
  // If image not found
  if (!updatedImage) throw new NotFoundError('Image not found');
  return getReturnData(updatedImage!);
};

const deleteImage = async (id: string) => {
  const deletedImage = await ImageModel.findOneAndDelete({ _id: id });
  // If image not found
  if (!deletedImage) throw new NotFoundError('Image not found');

  unlink(`public/uploads/${deletedImage.img_name}`).catch((err) => {
    console.error(err);
  });
  return getReturnData(deletedImage || {});
};

export { getImages, getImage, createImage, updateImage, deleteImage };
