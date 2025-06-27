import { execSync } from "child_process";
import { error } from "console";
import { join } from "path";

try {
	execSync(`chmod +x ${join(__dirname, "main.js")}`);
} catch (e) {
	error(e);
}