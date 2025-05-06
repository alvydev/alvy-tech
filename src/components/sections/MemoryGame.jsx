import { useState, useEffect } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import { motion } from 'framer-motion';

// Card data (you can add more pairs)
const cardSymbols = ['🐱', '🐶', '🐰', '🐨', '🦊', '🐼'];
const cardPairs = [...cardSymbols, ...cardSymbols];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

export const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  // Initialize game
  useEffect(() => {
    resetGame();
  }, []);

  // Handle card click
  const handleCardClick = (index) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.includes(index) ||
      matchedPairs.includes(index)
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);
    setMoves(moves + 1);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedPairs([...matchedPairs, firstIndex, secondIndex]);
        setFlippedCards([]);
        // Check if game is won
        if (matchedPairs.length + 2 === cardPairs.length) {
          setGameWon(true);
        }
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  // Reset game
  const resetGame = () => {
    setCards(shuffleArray([...cardPairs]));
    setFlippedCards([]);
    setMatchedPairs([]);
    setMoves(0);
    setGameWon(false);
  };

  return (
    <section
      id="game"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
          >
            Memory Game
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center mb-4">
              <p className="text-white/80">Moves: {moves}</p>
              <button
                onClick={resetGame}
                className="bg-blue-500 text-white py-2 px-4 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Reset Game
              </button>
            </div>

            {gameWon && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/5 border border-white/10 rounded p-4 text-center text-white mb-4"
              >
                <h3 className="text-xl font-medium">Congratulations!</h3>
                <p>You won in {moves} moves!</p>
              </motion.div>
            )}

            <div className="grid grid-cols-4 gap-4">
              {cards.map((symbol, index) => {
                const isFlipped = flippedCards.includes(index) || matchedPairs.includes(index);
                const isMatched = matchedPairs.includes(index);

                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: isFlipped ? 1 : 1.05 }}
                    onClick={() => handleCardClick(index)}
                    className={`bg-white/5 border border-white/10 rounded p-4 flex items-center justify-center h-20 cursor-pointer
                      ${isFlipped ? 'bg-blue-500/20' : 'hover:bg-blue-500/10'}
                      ${isMatched ? 'opacity-50' : ''}
                      transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]`}
                  >
                    <span className={`text-2xl ${isFlipped ? 'block' : 'hidden'}`}>
                      {symbol}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};