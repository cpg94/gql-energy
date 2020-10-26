import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    font-size: 30px;
`

export const Logo = styled.div``

export const Description = styled.div`
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.secondary}
`