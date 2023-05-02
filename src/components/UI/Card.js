import "./Card.css";

const Card = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;

/**
 * get the wrapper component content by --> props.children --> concept composition
 */
