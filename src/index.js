import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// The Square component renders a single <button> 
class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {/* TODO */}

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


// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));

