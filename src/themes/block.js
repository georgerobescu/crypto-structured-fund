import styled from 'styled-components'

export const PurchaseBlock = styled.div`
  width: 100%;
  padding: 1.25rem 2rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.mirageBlue};
  display: flex;
  flex-direction: column;

  > *:not(:first-child) {
    margin-top: 0.75rem;
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;

    > * {
      margin: 0;
    }
  }
`

export const PurchaseInfo = styled.div`
  > *:not(:first-child) {
    margin-top: 0.75rem;
  }
`

export const DataBlock = styled.div`
  flex: 1;
  padding: 1.25rem 0;
  border: 1px solid
    ${({ strong, theme }) => (strong ? theme.neonGreen : theme.mirageBlue)};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.mirageBlue};
  display: flex;
  flex-direction: column;
  align-items: center;

  > *:not(:first-child) {
    margin-top: 0.5rem;
  }
`

export const DateBlock = styled.div`
  flex: 1;
  padding: 1.25rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.mirageBlue};
  display: flex;
  align-items: center;

  > *:not(:first-child) {
    border-left: 1px solid ${({ theme }) => theme.white};
  }

  > .date-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    > *:not(:first-child) {
      margin-top: 0.75rem;
    }
  }
`
