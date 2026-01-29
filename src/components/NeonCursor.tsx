import { useEffect } from "react";

export default function NeonCursor() {
    useEffect(() => {
        const cursor = document.createElement("div");
        cursor.className =
            "fixed w-3 h-3 rounded-full bg-cyan-400 z-50 pointer-events-none";
        document.body.appendChild(cursor);

        const move = (e: MouseEvent) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        };

        window.addEventListener("mousemove", move);
        return () => {
            window.removeEventListener("mousemove", move);
            cursor.remove();
        };
    }, []);

    return null;
}
