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
      space: process.env.CTF_SPACE_ID!,
      accessToken: process.env.CTF_ACCESS_TOKEN!
    })
  }

  async getAllPosts (limit: number = 100) {
    const data: EntryCollection<PostProps> = await this.client.getEntries({
      limit,
      content_type: ContentType.post,
      order: '-sys.updatedAt'
    })
    const posts = data.items.map(post => new Post(post))
    return posts
  }

  async getPost (slug: string) {
    const data: EntryCollection<PostProps> = await this.client.getEntries({
      'fields.slug': slug,
      content_type: ContentType.post,
      order: '-sys.updatedAt'
    })
    const post = new Post(data.items[0])
    return post
  }
}

const contentful = new ContentfulAPI()

export default contentful
