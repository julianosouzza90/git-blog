/* eslint-disable react/no-children-prop */
import { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import ReactMarkdown from 'react-markdown'

import { api } from '../../lib/api'
import { PostHeader } from './PostHeader'
import { PostContainer, PostContent } from './styles'

export interface PostData {
  title: string
  body: string
  created_at: string
  comments: number
  comments_url: string
  html_url: string
  user: {
    login: string
  }
}
export function Post() {
  const username = import.meta.env.VITE_GITHUB_USERNAME
  const repository = import.meta.env.VITE_GITHUB_REPOSITORY
  const [post, setPost] = useState<PostData>({} as PostData)
  async function fetchPost() {
    const { data } = await api.get(`repos/${username}/${repository}/issues/1`)

    setPost(data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <PostContainer>
      <PostHeader content={post} />
      <PostContent>
        <ReactMarkdown
          children={post.body}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        />
        ,
      </PostContent>
    </PostContainer>
  )
}
