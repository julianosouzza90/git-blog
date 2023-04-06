import styled from 'styled-components'

export const ProfileContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.2rem;
  padding: 3.2rem 4rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
`
export const ProfileImage = styled.img`
  width: 14.98rem;
  height: 14.98rem;
  border-radius: 8px;
  object-fit: contain;
`
export const ProfileInfo = styled.div`
  flex: 1;
  header {
    display: flex;
    flex-wrap: wrap;

    justify-content: space-between;
    flex-direction: column-reverse;

    margin-bottom: 0.7rem;

    @media (min-width: 575px) {
      flex-direction: row;
    }
    a {
      text-align: right;
    }
    strong {
      color: ${(props) => props.theme['base-title']};
      font-size: ${(props) => props.theme['font-title-m']};
      font-weight: bold;
    }
  }
  p {
    color: ${(props) => props.theme['base-text']};
    line-height: 2.6rem;
    margin-bottom: 2.3rem;
  }
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem;

    li {
      display: flex;
      gap: 0.8rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
