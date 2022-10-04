import PropTypes from "prop-types";
import css from './Profile.module.css'

export default function Profile({ username, tag, location, avatar, stats:{followers,views,likes}}) {
    return (
    <div className={css.profile}>
  <div className={css.info} >
    <img
    className={css.image}
      src={avatar}
      alt={username}
      
    />
    <p className={css.title} >{username}</p>
    <p className={css.description} >@{tag}</p>
    <p className={css.description} >{location}</p>
  </div>

  <ul className={css.list} >
    <li className={css.item}>
      <span className={css.label} >Followers</span>
      <span className={css.quantity} >{followers}</span>
    </li>
    <li className={css.item}>
      <span  className={css.label}>Views</span>
      <span className={css.quantity} >{views}</span>
    </li>
    <li className={css.item}>
      <span  className={css.label}>Likes</span>
      <span  className={css.quantity}>{likes}</span>
    </li>
  </ul>
</div>
)
} 

Profile.propTypes = {
    username:PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views:PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
     
}