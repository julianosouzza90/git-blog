import { PostsData } from '..'
import { dateFormat } from '../../../utils/format'
import { characterLimit } from '../../../utils/strings'
import { PostCardContainer } from './styles'

interface PostsCardProps {
  content: PostsData
}
export function PostsCard({ content }: PostsCardProps) {
  return (
    <PostCardContainer to={`/post/${content.number}`}>
      <header>
        <strong>{content.title}</strong>
        <span>{dateFormat(content.created_at)}</span>
      </header>
      <p>{characterLimit(content.body)}</p>
    </PostCardContainer>
  )
}
