/* eslint-disable */
import {
  createClient,
  ContentfulClientApi,
  EntryCollection,
  Entry
} from 'contentful'
/* eslint-enable */

export enum ContentType {
  post = 'blogPost'
}

interface PostProps {
  slug: string
  title: string
  tags: string[]
  text: string
}

export class Post implements PostProps {
  slug: string
  title: string
  tags: string[]
  text: string
  constructor (post: Entry<PostProps>) {
    this.slug = post.fields.slug
    this.title = post.fields.title
    this.tags = post.fields.tags
    this.text = post.fields.text
  }
}

class ContentfulAPI {
  client: ContentfulClientApi
  constructor () {
    this.client = createClient({
      space: '',
      accessToken: ''
    })
  }

  async getAllPosts () {
    const data: EntryCollection<PostProps> = await this.client.getEntries({
      content_type: ContentType.post,
      order: 'sys.createdAt'
    })
    const posts = data.items.map(post => new Post(post))
    return posts
  }
}

const contentful = new ContentfulAPI()

export default contentful
