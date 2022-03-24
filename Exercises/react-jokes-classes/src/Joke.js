import { React, Component } from "react";
import "./Joke.css";

// function Joke({ vote, votes, text, id }) {
//   const upVote = () => vote(id, +1);
//   const downVote = () => vote(id, -1);

//   return (
//     <div className="Joke">
//       <div className="Joke-votearea">
//         <button onClick={upVote}>
//           <i className="fas fa-thumbs-up" />
//         </button>

//         <button onClick={downVote}>
//           <i className="fas fa-thumbs-down" />
//         </button>

//         {votes}
//       </div>

//       <div className="Joke-text">{text}</div>
//     </div>
//   );
// }

// export default Joke;

// REFACTORING to use class components
export class Joke extends Component {
  constructor(props) {
    super(props);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }
  upVote() {
    this.props.vote(this.props.id + 1);
  }
  downVote() {
    this.props.vote(this.props.id - 1);
  }

  render() {
    const { votes, text } = this.props;
    return (
      <div className="Joke">
        <div className="Joke-votearea">
          <button onClick={this.upVote}>
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={this.downVote}>
            <i className="fas fa-thumbs-down" />
          </button>

          {votes}
        </div>

        <div className="Joke-text">{text}</div>
      </div>
    );
  }
}

export default Joke;
