import { SlashCommand } from "../..";
import { stripImages } from "../../llm/countTokens";

const ShareSlashCommand: SlashCommand = {
  name: "share",
  description: "Download and share this session",
  run: async function* ({ ide, history }) {
    let content = `This is a session transcript from [FazzaPilot](https://continue.dev) on ${new Date().toLocaleString()}.`;

    for (const msg of history) {
      content += `\n\n## ${
        msg.role === "user" ? "User" : "FazzaPilot"
      }\n\n${stripImages(msg.content)}`;
    }

    const continueDir = await ide.getFazzaPilotDir();
    const path = `${continueDir}/session.md`;
    await ide.writeFile(path, content);
    await ide.openFile(path);

    yield `The session transcript has been saved to a markdown file at \`${path}\`.`;
  },
};

export default ShareSlashCommand;
