import React from 'react'
import styled from 'styled-components'

interface Props {
  totalPage: number
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  split: number
  jump: number
}
function Pagination({totalPage, currentPage, setCurrentPage, split, jump}: Props) {
  const ButtonsNumArr = []
  for (let i = 1; i < totalPage + 1; i++) {
    ButtonsNumArr.push(i)
  }

  // if (currentPage + split >= totalPage) {
  //   return (
  //     <div>
  //       <Button
  //         onClick={() => setCurrentPage(1)}
  //         disabled={currentPage <= 1 ? true : false}
  //       >
  //         {"<<"}
  //       </Button>
  //       <Button
  //         onClick={() => {
  //           if (currentPage - 5 <= 1) {
  //             setCurrentPage(1);
  //           } else setCurrentPage(currentPage - 5);
  //         }}
  //         disabled={currentPage <= 1 ? true : false}
  //       >
  //         {"<"}
  //       </Button>
  //       {ButtonsNumArr.slice(totalPage - split, totalPage).map((num) => (
  //         <Button
  //           key={num}
  //           onClick={() => {
  //             setCurrentPage(num);
  //           }}
  //         >
  //           {num}
  //         </Button>
  //       ))}
  //       <Button
  //         onClick={() => {
  //           if (currentPage + 5 >= totalPage) {
  //             setCurrentPage(totalPage);
  //           } else {
  //             setCurrentPage(currentPage + 5);
  //           }
  //         }}
  //         disabled={currentPage >= totalPage ? true : false}
  //       >
  //         {">"}
  //       </Button>
  //       <Button
  //         onClick={() => setCurrentPage(totalPage)}
  //         disabled={currentPage >= totalPage ? true : false}
  //       >
  //         {">>"}
  //       </Button>
  //     </div>
  //   );
  // }

  return (
    <div>
      <Button onClick={() => setCurrentPage(1)} disabled={currentPage <= 1 ? true : false}>
        {'<<'}
      </Button>
      <Button
        onClick={() => {
          if (currentPage - jump <= 1) {
            setCurrentPage(1)
          } else setCurrentPage(currentPage - jump)
        }}
        disabled={currentPage <= 1 ? true : false}
      >
        {'<'}
      </Button>
      {ButtonsNumArr.slice(currentPage - 1, currentPage + split - 1).map((num) => (
        <Button
          key={num}
          onClick={() => {
            setCurrentPage(num)
          }}
        >
          {num}
        </Button>
      ))}
      <Button
        onClick={() => {
          if (currentPage + jump >= totalPage) {
            setCurrentPage(totalPage)
          } else {
            setCurrentPage(currentPage + jump)
          }
        }}
        disabled={currentPage >= totalPage ? true : false}
      >
        {'>'}
      </Button>
      <Button
        onClick={() => setCurrentPage(totalPage)}
        disabled={currentPage >= totalPage ? true : false}
      >
        {'>>'}
      </Button>
    </div>
  )
}

export default Pagination

const Button = styled.button<{[key: string]: any}>`
  border: none;
  border-radius: 4px;
  padding: 8px;
  margin: 0;
  /* background: black; */
  color: black;
  font-size: 1rem;
  border: solid 1px lightgray;

  &:hover {
    background: skyblue;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: skyblue;
    color: white;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`
