import Profile  from "./Profile/Profile";
import user from '../Data/user.json';
import Statistics from "./Statistics/Statistics";
import statistics from '../Data/statistics.json';
import FriendList from "./FriendList/FriendList";
import friends from '../Data/friends.json';
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from '../Data/transactions.json';


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
    
  );
};