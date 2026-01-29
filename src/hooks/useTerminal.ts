import { useState } from "react";
import { commands } from "../commands";

export type Line = {
    type: "input" | "output";
    content: string;
};

export function useTerminal() {
    const [lines, setLines] = useState<Line[]>([
        { type: "output", content: "Type `help` to begin." },
    ]);

    function execute(input: string) {
        const [cmd, ...args] = input.trim().split(" ");

        setLines((prev) => [...prev, { type: "input", content: input }]);

        if (!commands[cmd]) {
            setLines((prev) => [
                ...prev,
                { type: "output", content: `command not found: ${cmd}` },
            ]);
            return;
        }

        const result = commands[cmd](args);
        if (result) {
            setLines((prev) => [...prev, { type: "output", content: result }]);
        }
    }

    function clear() {
        setLines([]);
    }

    return { lines, execute, clear };
}
