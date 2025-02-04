import { useLoaderData } from '@remix-run/react';

import { loader } from '~/routes/cmsdesk+/pages+/new';
import { IPage } from '~/interfaces/page.interface';
import Wrapper from './Wrapper';
import { useEffect, useState } from 'react';
import TextEditor from '../TextEditor/index.client';
import Hydrated from '../Hydrated';
import Select from '../../widgets/Select/index';
import TextInput from '../TextInput';

export default function ServicePageEditor({
  page,
  type,
  template,
  setTemplate,
}: {
  page?: IPage;
  type: 'update' | 'create';
  template: string;
  setTemplate: (template: string) => void;
}) {
  const { pageTemplates, pageCategories } = useLoaderData<typeof loader>();

  const [isChanged, setIsChanged] = useState(false);
  const [content, setContent] = useState(page?.pst_content || '');
  const [title, setTitle] = useState(page?.pst_title || '');
  const [category, setCategory] = useState(
    page?.pst_category || pageCategories[0].id
  );

  useEffect(() => {
    if (page) {
      setIsChanged(
        page.pst_title !== title ||
          JSON.stringify(JSON.parse(page.pst_content || '{}')?.blocks || []) !==
            JSON.stringify(JSON.parse(content || '{}')?.blocks || []) ||
          page.pst_category !== category ||
          page.pst_template !== template
      );
    }
  }, [page, content, title, category, template]);

  return (
    <Wrapper fetcherKey={page?.id || 'new'} type={type} isChanged={isChanged}>
      <div className='col-span-12'>
        <TextInput
          label='Title'
          type='text'
          name='title'
          id='title'
          defaultValue={title}
          value={title}
          onChange={(value) => setTitle(value)}
          autoComplete='title'
        />
      </div>

      {/* Thumbnail */}
      <div className='col-span-12 flex gap-x-4'>
        <Select
          className='w-full'
          label='Danh mục'
          name='category'
          defaultValue={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {pageCategories.map((cat, i) => (
            <option key={i} value={cat.id}>
              {cat.pct_name}
            </option>
          ))}
        </Select>

        <Select
          className='w-full mt-4'
          label='Template'
          name='template'
          defaultValue={template}
          onChange={(e) => setTemplate(e.target.value)}
        >
          {pageTemplates.map((tem, i) => (
            <option key={i} value={tem.id}>
              {tem.ptp_name}
            </option>
          ))}
        </Select>
      </div>

      <div className='col-span-12'>
        <label className='block text-sm font-semibold leading-6 text-black'>
          Content
        </label>

        <Hydrated fallback={<div>Loading...</div>}>
          {() => (
            <TextEditor
              value={content}
              onChange={(c) => {
                setContent(c);
              }}
            />
          )}
        </Hydrated>
        <input type='hidden' name='content' value={content} />
      </div>
    </Wrapper>
  );
}
