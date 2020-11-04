import { undoInputRule } from "prosemirror-inputrules";
import { yUndoPlugin, undo, redo } from "y-prosemirror";
import Extension from "../lib/Extension";

export default class SyncedHistory extends Extension {
  get name() {
    return "synced_history";
  }

  keys() {
    return {
      "Mod-z": undo,
      "Mod-y": redo,
      "Shift-Mod-z": redo,
      Backspace: undoInputRule,
    };
  }

  get plugins() {
    return [yUndoPlugin()];
  }
}
