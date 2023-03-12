
interface Props {
    setMyNumb: (numb: number) => void;
    setCurrentPage: (numb: number) => void;
    myNumb: number;
}

const styles = {
    
    nav: ' w-full h-auto',
    ul: 'flex flex-row justify-around sm:w-[60%] m-auto flex-wrap border-t-2 border-blue-300',
    li__active: 'border-b-4 border-red-600',
  };

function Top_Menu({myNumb, setMyNumb, setCurrentPage}: Props) {

  const handleClick = (numb: number) => {
    setMyNumb(numb);
    setCurrentPage(1);
  }

return <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li 
            className={myNumb === 0 ? styles.li__active : ''}
            onClick={() => handleClick(0)}
          >
            Oxford B1
          </li>
          <li
            className={myNumb === 1 ? styles.li__active : ''}
            onClick={() => handleClick(1)}
          >
            Oxford B2
          </li>
          <li
            className={myNumb === 2 ? styles.li__active : ''}
            onClick={() => handleClick(2)}
          >
            Oxford C1
          </li>
          <li
            className={myNumb === 3 ? styles.li__active : ''}
            onClick={() => handleClick(3)}
          >
            Goethe De
          </li>
        </ul>
      </nav>
}

export default Top_Menu;