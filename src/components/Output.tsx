import { motion } from "framer-motion";

export default function Output({ lines }: any) {
    return (
        <div className="mb-3 space-y-1">
            {lines.map((l: any, i: number) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={
                        l.type === "input" ? "neon-text" : "text-white/80"
                    }
                >
                    {l.content}
                </motion.div>
            ))}
        </div>
    );
}
