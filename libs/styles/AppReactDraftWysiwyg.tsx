"use client";

// Third-party imports
import dynamic from "next/dynamic";
import type { EditorProps } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// Dynamically import the Editor to avoid SSR issues
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const AppReactDraftWysiwyg = (props: EditorProps) => {
  const { ...rest } = props;

  // Custom toolbar options
  const toolbarOptions = {
    options: [
      "inline",
      "blockType",
      "fontSize",
      "list",
      "textAlign",
      "history",
    ],
    inline: {
      options: ["bold", "italic", "underline", "strikethrough"],
    },
    blockType: {
      options: ["Normal", "H1", "H2", "H3", "Blockquote"],
    },
    fontSize: {
      className: "border border-gray-300",
    },
    list: {
      options: ["unordered", "ordered"],
    },
    textAlign: {
      options: ["left", "center", "right"],
    },
  };

  return (
    <Editor
      toolbarClassName="bg-gray-100 border border-gray-300 rounded-t-lg"
      wrapperClassName="p-4 border border-gray-300 rounded-lg"
      editorClassName="px-4 bg-white border border-gray-300 rounded-lg"
      toolbar={toolbarOptions}
      {...rest}
    />
  );
};

export default AppReactDraftWysiwyg;
