import { help } from "./help";
import { about } from "./about";
import { projects } from "./projects";
import { skills } from "./skills";
import { socials } from "./socials";

export const commands: Record<string, (args: string[]) => string | null> = {
    help,
    about,
    projects,
    skills,
    socials,
    clear: () => null,
};
