import type { ActionFunction, LoaderFunction} from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import {createPost, getPosts} from '~/services/posts.server';
import type {Post} from '~/services/posts.server';
import { Post as PostComponent} from '~/components/Post';
import { PostForm } from '~/components/PostForm';

type LoaderData = {
  posts: Post[]
}

export const action: ActionFunction = async({request}) => {
  const form = await request.formData()
  const rawTitle = form.get('title')
  const rawBody = form.get('body')

  const post = await createPost({title: rawTitle, body: rawBody})

  return redirect('/')
}

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    posts: await getPosts()
  }
  return json(data)
}

export default function Index() {

  const {posts} = useLoaderData<LoaderData>()

  return (
    <div className='flex flex-col items-center' >
      <PostForm 
        action='/?index'
      />
      <ul>
        {posts.map(post => (
          <li key={post.title} >
            <PostComponent header={post.title}>
              {post.body}
            </PostComponent>
          </li>
        ))}
      </ul>
    </div>
  );
}
