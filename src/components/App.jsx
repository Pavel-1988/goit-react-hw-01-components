import { Section } from 'components/Section/Section'
import {Profile} from 'components/Profile/Profile'
import { Statistics } from 'components/Statistics/Statistics'
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory'
import {FriendList} from 'components/FriendList/FriendList'

import user from '../data/user.json'
import data from '../data/data.json'
import transactions from '../data/transactions.json'
import friends from '../data/friends.json'


export const App = () => {
  return (
    <div>
      <Section title={"Task-1 'Profile'"}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title={"Task-2 'Statistics'"}>
        <Statistics title="Upload stats" stats={data} />
      </Section>
      <Section title={"Task-3 'FriendList'"}>
        <FriendList friends={friends} />
      </Section>
      <Section title={"Task-3 'TransactionHistory'"}>
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
};
