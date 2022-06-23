import styled from "styled-components";

export const SucessBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  min-height: 32vw;
`;

export const SucessImage = styled.img`
  width: 50vh;
`;

export const SucessContainer = styled.div`
  margin-right: 5vh;
  align-items: center;
  text-align: right;
  line-height: 0.5rem;
  margin-bottom: 10vh;
  #h2 {
    color: #c12d18;
  }
  #h1 {
    color: #c12d18;
    line-height: 2rem;
  }
  #p {
    color: #222222;
    margin-bottom: 2rem;
  }
`;
