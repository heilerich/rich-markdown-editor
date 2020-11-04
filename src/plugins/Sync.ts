import ReactDOM from "react-dom";
import { ySyncPlugin, yCursorPlugin } from "y-prosemirror";
import EditorCursor from "../components/EditorCursor";
import Extension from "../lib/Extension";
import compact from "lodash/compact";

function cursorBuilder(userInfo: any): HTMLElement {
  const cursor = document.createElement("span");
  const editorCursor = EditorCursor({
    userName: userInfo.name,
    userColor: userInfo.color,
  });
  ReactDOM.render(editorCursor, cursor);
  return cursor;
}

export default class Sync extends Extension {
  get name() {
    return "sync";
  }

  get plugins() {
    return compact([
      this.options.yXmlFragment !== undefined
        ? ySyncPlugin(this.options.yXmlFragment)
        : null,
      this.options.yProvider !== undefined
        ? yCursorPlugin(this.options.yProvider.awareness, {
            cursorBuilder,
            getSelection: state => state.selection,
            cursorStateField: "cursor",
          })
        : null,
    ]);
  }
}
