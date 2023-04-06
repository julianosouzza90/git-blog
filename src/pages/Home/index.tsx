import { useCallback, useEffect, useState } from 'react'
import Loader from 'react-js-loader'
import { api } from '../../lib/api'
import { PostsCard } from './PostCard'
import { Profile } from './Profile'
import { SearchPosts } from './SearchPosts'
import { HomeContainer, PostsContainer } from './styles'

export interface PostsData {
  number: 1
  title: string
  body: string
  created_at: string
  url: string
}
export function Home() {
  const [posts, setPosts] = useState<PostsData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const fetchPosts = useCallback(
    async (query: string = '') => {
      const username = import.meta.env.VITE_GITHUB_USERNAME
      const repository = import.meta.env.VITE_GITHUB_REPOSITORY
      setIsLoading(true)
      try {
        const { data } = await api.get('https://api.github.com/search/issues', {
          params: {
            q: `repo:${username}/${repository} is:open ${query}
          `,
          },
        })
        setPosts(data.items)
      } finally {
        setIsLoading(false)
      }
    },
    [posts],
  )

  useEffect(() => {
    fetchPosts()
  }, [])
  return (
    <HomeContainer>
      <Profile />
      <SearchPosts totalPosts={posts.length} fetchPosts={fetchPosts} />
      {isLoading && (
        <Loader
          type="bubble-top"
          bgColor={'#FFFFFF'}
          title={'Carregando posts'}
          color={'#CCCC'}
          size={50}
        />
      )}
      <PostsContainer>
        {!posts.length ? (
          <p className="notfound">
            OPs! Nenhum post encontrado! Tente usando outros termos
          </p>
        ) : (
          posts.map((post) => <PostsCard key={post.number} content={post} />)
        )}
      </PostsContainer>
    </HomeContainer>
  )
}
