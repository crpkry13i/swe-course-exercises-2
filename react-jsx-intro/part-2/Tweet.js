const Tweet = (props) => {
  return (
    <div>
      <span>@{props.username} </span>
      <span>{props.name} </span>
      <span>{props.date}</span>
      <p>{props.message}</p>
    </div>
  );
}