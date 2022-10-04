import PropTypes from "prop-types";
import css from './FriendList.module.css'
import FriendItem from "../FriendItem/FriendItem";

export default function FriendList({friends}) {
    return (
        <ul className={css.list}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
            ))}
       </ul>
   )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};