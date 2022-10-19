import axios from "axios";
import Coin from "../../components/Coin";
import styles from "../../styles/Coin.module.css";

export default function Coinlist({ coinData }) {
  console.log(coinData);
  const coins = coinData.coins;
  return (
    <div className={styles.container}>
      <br />
      <h1> Coin List</h1>
      <h4>각 개체에 마우스를 올리면 hover효과가 나타나도록 만들고싶었지만..</h4>
      <h4>일이 커질 것 같아서 통째로 변경되도록 냅두었습니다..</h4>
      <br />
      <div className={styles.coinContainer}>
        {coins.map((coin) => {
          return (
            <div key={coin.id} className={styles.coinItem}>
              <Coin coin={coin} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const result = await axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: result.data,
    },
    revalidate: 10,
  };
};
