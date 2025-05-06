"use client";

import { Button, Textarea } from "@nextui-org/react";
import { MessageCircle, Send } from "lucide-react";
import { type useChat } from "ai/react";
import { Ref, useEffect, useState } from "react";
import PreBuildPrompt from "./PreBuildPrompt";

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"];
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"];
type SetInput = ReturnType<typeof useChat>["setInput"];

interface ChatInputProps {
  input: string;
  handleInputChange: HandleInputChange;
  handleSubmit: HandleSubmit;
  setInput: SetInput;
  formRef?: any;
  salesMagnet?: boolean;
  prompt?: string;
  setShowPopup?: (value: boolean) => void;
  isDetailsSubmitted?: boolean;
  setHasSubmittedPrompt?: (value: boolean) => void;
  hasSubmittedPrompt?: boolean;
  handlePromptButton?: (prompt: string) => void;
}

export const ChatInput = ({
  handleInputChange,
  handlePromptButton,
  handleSubmit,
  input,
  setInput,
  formRef,
  salesMagnet,
  prompt,
  setShowPopup,
  isDetailsSubmitted,
  setHasSubmittedPrompt,
  hasSubmittedPrompt,
}: ChatInputProps) => {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (salesMagnet && prompt) {
      setInput(prompt);
    }
  }, [salesMagnet, prompt, setInput]);

  const handleCustomSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();

    if (salesMagnet) {
      if (!isDetailsSubmitted) {
        setShowPopup?.(true);
        return;
      }

      if (hasSubmittedPrompt) return;
      setHasSubmittedPrompt(true);
    }

    handleSubmit(e);
    setInput("");
  };

  const handleIconClick = () => {
    setShowModal(true); // Show modal on icon click
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };

  console.log('handlePromptButton in PreBuildPrompt:', handlePromptButton);

  return (
    <div className="z-10 bg-[#151221] bottom-0 left-0 w-full p-4">
      <form
        ref={formRef}
        onSubmit={handleCustomSubmit}
        className="relative max-w-4xl mx-auto"
      >
        <div className="flex items-center">
          <MessageCircle
            className="text-gray-400 mr-2 cursor-pointer"
            size={20}
            onClick={handleIconClick} // Trigger modal on click
          />
          <Textarea
            minRows={4}
            autoFocus
            onChange={handleInputChange}
            value={input}
            disabled={salesMagnet && hasSubmittedPrompt}
            readOnly={salesMagnet && !!prompt}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleCustomSubmit();
              }
            }}
            placeholder="Message Oliver..."
            className="resize-none bg-zinc-800 hover:bg-zinc-900 focus:!ring-violet-600 rounded-xl text-base w-full"
          />
        </div>
        <Button
          size="sm"
          type="submit"
          disabled={salesMagnet && hasSubmittedPrompt}
          className="absolute z-10 border border-border bg-[#151221] right-2 bottom-2"
        >
          <Send className="size-4" />
        </Button>
      </form>
      {showModal && handlePromptButton && (
        <PreBuildPrompt
          onClose={handleCloseModal}
          handlePromptButton={handlePromptButton} // Pass handlePromptButton to PreBuildPrompt
        />
      )}
    </div>
  );
};
