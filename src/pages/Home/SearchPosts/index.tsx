import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { SearchPostsContainer } from './styles'

interface SearchProps {
  fetchPosts: (query?: string) => Promise<void>
  totalPosts: number
}
const schema = zod.object({
  query: zod.string(),
})
type FormType = zod.infer<typeof schema>
export function SearchPosts({ totalPosts, fetchPosts }: SearchProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
  })
  async function handleSearchInput(data: FormType) {
    await fetchPosts(data.query)
  }
  return (
    <SearchPostsContainer onSubmit={handleSubmit(handleSearchInput)}>
      <header>
        <h3>Publicações</h3>
        <span> {`${totalPosts} publicações`}</span>
      </header>
      <input
        type="search"
        placeholder="Buscar  conteúdo"
        {...register('query')}
      />
    </SearchPostsContainer>
  )
}
