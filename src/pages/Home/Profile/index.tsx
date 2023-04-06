import Loader from 'react-js-loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { ProfileContainer, ProfileImage, ProfileInfo } from './styles'

import { Link } from '../../../components/Link'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../lib/api'

interface ProfileData {
  name: string
  login: string
  html_url: string
  avatar_url: string
  bio: string
  company: string | null
  followers: number
}
export function Profile() {
  const [profile, setProfile] = useState<ProfileData>()
  const [isLoading, setIsLoading] = useState(true)
  const fetchProfile = useCallback(async () => {
    const username = import.meta.env.VITE_GITHUB_USERNAME

    try {
      setIsLoading(true)
      await new Promise((resolve) => {
        setTimeout(resolve, 2000)
      })
      const { data } = await api.get(`users/${username}`)
      setProfile(data)
    } finally {
      setIsLoading(false)
    }
  }, [setProfile])

  useEffect(() => {
    fetchProfile()
  }, [])
  return (
    <ProfileContainer>
      {isLoading ? (
        <Loader
          type="bubble-top"
          bgColor={'#FFFFFF'}
          title={'Carregando perfil'}
          color={'#CCCC'}
          size={50}
        />
      ) : (
        <>
          <ProfileImage src={profile?.avatar_url} />
          <ProfileInfo>
            <header>
              <strong>{profile?.name}</strong>
              <Link
                text="GITHUB"
                href={profile?.html_url}
                target={'_blank'}
                icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
              />
            </header>
            <p>{profile?.bio}</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {profile?.login}
              </li>
              {profile?.company && (
                <li>
                  <FontAwesomeIcon icon={faGithub} />
                  {profile?.company}
                </li>
              )}
              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                {profile?.followers.toString().padStart(2, '0')} seguidores
              </li>
            </ul>
          </ProfileInfo>
        </>
      )}
    </ProfileContainer>
  )
}
