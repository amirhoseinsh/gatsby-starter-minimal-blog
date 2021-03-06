/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { Link } from "gatsby"
import Layout from "./layout"
import Title from "./title"
import Listing from "./listing"
import List from "./list"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import useSiteMetadata from "../hooks/use-site-metadata"
import replaceSlashes from "../utils/replaceSlashes"
import { visuallyHidden } from "../styles/utils"
// @ts-ignore
import Hero from "../texts/hero"
// @ts-ignore
import Bottom from "../texts/bottom"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
  [key: string]: any
}

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig();
  const { siteTitle } = useSiteMetadata();
  // console.log(posts);
  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 }, variant: `section_hero` }}>
        <Hero />
      </section>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '40%', m: 2 }}>
          <Title text="Latest Essays">
            <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all essays</Link>
          </Title>

          <Listing posts={posts} showTags={false} />
        </Box>
        <Box sx={{ width: '40%', m: 2 }}>
          <Title text="Patterns">
            <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all patterns</Link>
          </Title>
        </Box>
      </Box>
      <List sx={{ variant: `links.secondary` }}>
        <Bottom />
      </List>


    </Layout >
  )
};

export default Homepage
