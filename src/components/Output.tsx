import { motion } from "framer-motion";
import type { Line } from "../hooks/useTerminal";

export default function Output({ lines }: { lines: Line[] }) {
    return (
        <div className="mb-4 space-y-1 whitespace-pre-wrap">
            {lines.map((line, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={
                        line.type === "input" ? "neon-text" : "text-white/80"
                    }
                >
                    {line.type === "input"
                        ? `anshuman@neon:~$ ${line.content}`
                        : line.content}
                </motion.div>
            ))}
        </div>
    );
}
