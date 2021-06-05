import styled from 'styled-components'

export const CardWrapper = styled.div`
    width: 100%;
    margin: auto;
    clip-path: polygon(20% 0, 97% 0, 100% 15%, 100% 97%, 80% 100%, 3% 100%, 0 85%, 0 3%);
    background: ${({color}) => color || '#f17a7e'};
    border: 2px solid ${({color}) => color || '#f17a7e'};
    margin-bottom: 1rem;
`

export const Card = styled.div`
    margin: auto;
    clip-path: polygon(20% 0, 97% 0, 100% 15%, 100% 97%, 80% 100%, 3% 100%, 0 85%, 0 3%);
    background: ${({color}) => color || '#f17a7e'};
    padding: 20px 20px;
    text-align: left;
    color: ${({textColor}) => textColor || '#fff'};
    &:hover{
        cursor: pointer;
    }
`