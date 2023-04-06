import { formatRelative } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

export const dateFormat = (date: string) => {
  const result = formatRelative(new Date('2023-03-25T03:24:00'), new Date(), {
    locale: ptBr,
  })
  return result
}
