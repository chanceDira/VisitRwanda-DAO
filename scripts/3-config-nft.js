import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x5DDFF97eBAC8DFc98631287c088992845383c55b");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Rwanda culture dance",
        description: "This NFT will give you access to VisitRwandaDAO!",
        image: readFileSync("scripts/assets/VisitRwanda.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();