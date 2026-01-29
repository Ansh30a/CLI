import { motion } from "framer-motion";
import { useTerminal } from "../hooks/useTerminal";
import Prompt from "./Prompt";
import Output from "./Output";

export default function Terminal() {
    const terminal = useTerminal();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-6 w-full max-w-3xl font-mono text-sm"
        >
            <Output lines={terminal.lines} />
            <Prompt onSubmit={terminal.execute} />
        </motion.div>
    );
}
