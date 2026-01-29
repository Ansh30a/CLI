import { useState } from "react";

export default function Prompt({
    onSubmit,
}: {
    onSubmit: (v: string) => void;
}) {
    const [value, setValue] = useState("");

    return (
        <div className="flex gap-2 neon-text">
            <span>anshuman@neon:~$</span>
            <input
                autoFocus
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onSubmit(value);
                        setValue("");
                    }
                }}
                className="bg-transparent outline-none flex-1"
            />
        </div>
    );
}
