import React from 'react';

interface KeyboardKeyProps {
    char: string;
    span?: boolean;
    active: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const KeyboardKey: React.FC<KeyboardKeyProps> = ({
    char,
    span,
    active,
    onMouseEnter,
    onMouseLeave
}) => {
    return (
        <div
            className={`key ${span ? 'span' : ''} ${active ? 'active' : ''}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            role="button"
            tabIndex={0}
        >
            <div className="side" />
            <div className="top" />
            <div className="char">{char}</div>
        </div>
    );
};

export default KeyboardKey;