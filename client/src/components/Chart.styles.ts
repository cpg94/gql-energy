import styled from 'styled-components'

interface IFilterButton {
    first?: boolean;
    last?: boolean;
}

export const FilterContainer = styled.div`
    display: flex;
    margin: 10px;
    justify-content: space-between;
    align-items: center;
`

export const FilterButton = styled.button<IFilterButton>`
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.secondary};
    border: none;
    padding: 10px;
    cursor: pointer;
    border-left: 1px solid ${props => props.theme.primary};
    border-bottom-left-radius: ${props => props.first ? '5px' : '0px'};
    border-top-left-radius: ${props => props.first ? '5px' : '0px'};
    border-top-right-radius: ${props => props.last ? '5px' : '0px'};
    border-bottom-right-radius: ${props => props.last ? '5px' : '0px'};
    &:focus {
      outline: none;
      color: ${props => props.theme.textDarker};
    }
`   
export const Loader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color:${props => props.theme.secondary};
`