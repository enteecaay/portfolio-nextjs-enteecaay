'use client'; // Mark as client component

import React from 'react';
import KeyboardKey from './KeyboardKey';

// TypeScript interfaces
interface SetState<T> {
  add: (item: T) => void;
  remove: (item: T) => void;
  has: (item: T) => boolean;
}

interface ColumnProps {
  children: React.ReactNode;
}

interface RowProps {
  children: React.ReactNode;
}

const useSetState = (initialState: string[] = []): SetState<string> => {
  const [state, setState] = React.useState<Set<string>>(new Set(initialState));

  const add = (item: string) => setState(prevState => new Set(prevState).add(item));
  const remove = (item: string) => setState(prevState => {
    const newState = new Set(prevState);
    newState.delete(item);
    return newState;
  });

  return {
    add,
    remove,
    has: (char: string) => state.has(char)
  };
};

const useSound = (url: string) => {
  const sound = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    // Create audio element only on client side
    if (typeof window !== 'undefined') {
      sound.current = new Audio(url);
    }

    return () => {
      if (sound.current) {
        sound.current.pause();
        sound.current = null;
      }
    };
  }, [url]);

  return {
    play: () => {
      sound.current?.play().catch(err => console.error('Error playing sound:', err));
    },
    stop: () => {
      if (sound.current) {
        sound.current.pause();
        sound.current.currentTime = 0;
      }
    }
  };
};

const Column: React.FC<ColumnProps> = ({ children }) => <div className="column">{children}</div>;
const Row: React.FC<RowProps> = ({ children }) => <div className="row">{children}</div>;

const Keyboard3D: React.FC = () => {
  // Mechanical click sound 
  const { play, stop } = useSound('https://cdn.yoavik.com/codepen/mechanical-keyboard/keytype.mp3');
  const { add, remove, has } = useSetState([]);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      add(e.key);
      stop();
      play();
    };
    const handleKeyUp = (e: KeyboardEvent) => remove(e.key);

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    // Clean up event listeners
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [add, remove, play, stop]);

  // Functions to handle hover interactions
  const handleMouseEnter = (char: string) => {
    add(char);
    stop();
    play();
  };

  const handleMouseLeave = (char: string) => {
    remove(char);
  };

  const keys = (chars: string[], spans: boolean[] = []) =>
    chars.map((char, i) => (
      <KeyboardKey
        key={char}
        char={char}
        span={spans[i] || false}
        active={has(char)}
        onMouseEnter={() => handleMouseEnter(char)}
        onMouseLeave={() => handleMouseLeave(char)}
      />
    ));

  return (
    <div className='keyboard-wrapper'>
      <div className="keyboard">
        <Column>
          <Row>{keys(['FB', 'GH', 'CV'])}</Row>
        </Column>
        <div className="cover" />
      </div>
    </div>
  );
};

export default Keyboard3D;