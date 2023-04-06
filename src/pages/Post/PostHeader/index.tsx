import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { PostData } from '..'
import { Link } from '../../../components/Link'
import { dateFormat } from '../../../utils/format'
import { Links, PostHeaderContainer } from './styles'

interface PostHeaderProps {
  content: PostData
}
export function PostHeader({ content }: PostHeaderProps) {
  const navigate = useNavigate()
  function back() {
    navigate(-1)
  }
  return (
    <PostHeaderContainer>
      <Links>
        <Link
          as="button"
          onClick={() => {
            back()
          }}
          text="VOLTAR"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          variant="iconPositionLeft"
        />
        <Link
          href={content.html_url}
          target="_blank"
          text="VER NO GITHUB"
          icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
        />
      </Links>
      <h3>{content.title}</h3>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          {/* content.user.login */}
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarDay} />
          {dateFormat(content.created_at)}
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          {content.comments} comentários
        </li>
      </ul>
    </PostHeaderContainer>
  )
}
