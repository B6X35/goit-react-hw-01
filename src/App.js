import style from './style/App.module.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendLIst/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import data from './data';

function App() {
  return (
    <div className={style["App"]}>
      <Profile  
        username={data.user.username}
        tag={data.user.tag}
        location={data.user.location}
        avatar={data.user.avatar}
        stats={data.user.stats}
      />
      <Statistics title="Upload stats" stats={data.stat} />
      <Statistics stats={data.stat} />
      <FriendList friends={data.friends} />
      <TransactionHistory items={data.transactions} />
    </div>
  );
}

export default App;