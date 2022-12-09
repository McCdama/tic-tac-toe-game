import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// The Square component renders a single <button> 
class Square extends React.Component {
    render() {
        return (
            <button className="square"
                onClick={
                    // set up a click event listener
                    // and call the Square's onClick prop --> Board
                    () => { this.props.onClick() }}
            >
                {this.props.value}
            </button>
        );
    }
}

// The Board renders 9 squares.
class Board extends React.Component {
    // initial state
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        // update the source
        this.setState({ squares: squares })
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]}
            // call the above func.
            onClick={() => this.handleClick(i)}
        />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className="board-row">
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
            </div>
        );
    }
}

// renders a board with placeholder values - modify later
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
