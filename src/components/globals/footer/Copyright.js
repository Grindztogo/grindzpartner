import React from "react"
import styled from "styled-components"

const Copyright = () => {
  return (
    <CopyrightWrapper className="copyright">
      &copy; Copyright 2020 | Grindz Partner & Grindz To Go
    </CopyrightWrapper>
  )
}

const CopyrightWrapper = styled.div`
  width: 100vw;
  bottom: 0;
  text-align: center;
  padding: 1rem 0rem 1rem 0rem;
  font-size: 0.8rem;
  color: var(--white);
  background: var(--mainColor);
`

export default Copyright
