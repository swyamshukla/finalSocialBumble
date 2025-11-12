import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState } from 'react';

// Individual draggable card with 3D rotation
function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

// Main stack component
export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 300 },
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = true
}) {
  const [cards, setCards] = useState([
    { id: 1, img: './src/assets/randomPerson/card1-2.webp', tag: 'Outdoor' },
    { id: 2, img: './src/assets/randomPerson/card2-2.webp', tag: 'Running' },
    { id: 3, img: './src/assets/randomPerson/card3-2.webp', tag: 'Music' },
    { id: 4, img: './src/assets/randomPerson/card4.avif', tag: 'Foodie' },
    { id: 5, img: './src/assets/randomPerson/card5.avif', tag: 'Artist' },
    { id: 6, img: './src/assets/randomPerson/card6.avif', tag: 'Book Lover' }
  ]);

  const sendToBack = id => {
    setCards(prev => {
      const newCards = [...prev];
      const index = newCards.findIndex(card => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="relative"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 500
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;

        return (
          <CardRotate key={card.id} onSendToBack={() => sendToBack(card.id)} sensitivity={sensitivity}>
            <motion.div
              className="rounded-2xl overflow-hidden border-4 border-white shadow-lg"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: '90% 90%'
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height
              }}
            >
              {/* Image */}
              <img
                src={card.img}
                alt={`card-${card.id}`}
                className="w-full h-full object-cover pointer-events-none"
              />

              {/* Tag on top-right corner */}
              <span className="absolute top-2 right-2 bg-[#FFD54F] text-[#2E2E2E] text-[20px] font-semibold px-4 py-[6px] rounded-full shadow-sm rotate-[12deg] hover:rotate-0 transition-transform duration-100">
                {card.tag}
              </span>
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
