import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// The Square component renders a single <button> 
class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {/* TODO */}
                {this.props.value}
            </button>
        );
    }
}

// The Board renders 9 squares.
class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare("X")}
                    {this.renderSquare("X")}
                    {this.renderSquare("X")}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(6)}
                    {this.renderSquare(9)}
                </div>
                <div className="board-row">
                    {this.renderSquare("Y")}
                    {this.renderSquare("Y")}
                    {this.renderSquare("Y")}
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
