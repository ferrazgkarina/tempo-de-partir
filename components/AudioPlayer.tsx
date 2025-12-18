import { useState, useEffect, useRef, FC } from "react";
import { Play, Pause, Square, Headphones } from "lucide-react";

interface AudioPlayerProps {
  title: string;
  text: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ title, text }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [supported, setSupported] = useState(true);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      setSupported(false);
      return;
    }

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handlePlay = () => {
    if (isPaused && isPlaying) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      const fullText = `${title}. . ${text}`;
      const utterance = new SpeechSynthesisUtterance(fullText);
      utterance.lang = "pt-BR";
      utterance.rate = 0.9;
      utterance.pitch = 1;

      utterance.onend = () => {
        setIsPlaying(false);
        setIsPaused(false);
      };

      utterance.onstart = () => {
        setIsPlaying(true);
        setIsPaused(false);
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  };

  const handlePause = () => {
    window.speechSynthesis.pause();
    setIsPaused(true);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  if (!supported) return null;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-paper p-6 md:p-0">
      <div className="flex items-center gap-3 mb-2">
        <Headphones className="w-5 h-5 opacity-80" />
        <span className="text-xs uppercase tracking-[0.2em] font-bold">
          {isPlaying ? "Ouvindo agora" : "Ouvir Artigo"}
        </span>
      </div>

      <div className="flex items-center gap-4">
        {!isPlaying || isPaused ? (
          <button
            onClick={handlePlay}
            className="group flex items-center gap-2 text-white hover:text-ink transition-colors font-serif text-xl md:text-2xl font-medium"
          >
            <span>{isPaused ? "Continuar" : "Play"}</span>
            <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
              <Play className="w-3 h-3 fill-current group-hover:text-accent" />
            </div>
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <button
              onClick={handlePause}
              className="text-white hover:text-ink transition-colors p-2"
              title="Pausar"
            >
              <Pause className="w-8 h-8 fill-current" />
            </button>
            <button
              onClick={handleStop}
              className="text-white/70 hover:text-ink transition-colors text-xs uppercase tracking-wider font-bold"
              title="Parar"
            >
              <Square className="w-4 h-4 fill-current" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
