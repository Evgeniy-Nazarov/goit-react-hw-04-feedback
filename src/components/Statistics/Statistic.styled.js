import styled from 'styled-components';

export const StatisticWrapper = styled.ul`
font-size: 16px;
    font-weight: 700;
    Font-color: #000;
    Background-color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 100%;
    padding: 0;
    list-style: none;
`;

export const StatisticItem = styled.li`
Font-size: 16px;
    font-weight: 700;
    Font-color: #000;
    Background-color: #fff;
    border-radius: 5px;
    TEXT-align: center;
    display: ${props => (props.children[1] >=1 ? 'block' : 'none')};
    padding-bottom: 10px;
    padding-top: 10px;
    margin: 0;
    border-bottom: 1px solid #e0e0e0;
    &:last-child {
        border-bottom: none;
    }
`;