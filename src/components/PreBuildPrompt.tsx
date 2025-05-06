import React, { useState } from "react";
import { Button } from "@nextui-org/react";

const PreBuildPrompt: React.FC<{ onClose: () => void; handlePromptButton: (prompt: string) => void }> = ({
  onClose,
  handlePromptButton,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("Sales");

  // Sample prompts for each category
  const prompts = {
    Sales: [
      "Write a persuasive cold email using Sales document.",
      "Create a sales pitch for a new product.",
      "Generate follow-up emails for sales leads.",
      "Write a persuasive cold email using Sales document.",
      "Create a sales pitch for a new product.",
      "Generate follow-up emails for sales leads.",
      "Write a persuasive cold email using Sales document.",
      "Create a sales pitch for a new product.",
      "Generate follow-up emails for sales leads.",
    ],
    Finance: [
      "Write a financial report for Q1.",
      "Create a financial analysis for a new investment.",
      "Generate a budget breakdown for the year.",
      "Write a financial report for Q1.",
      "Create a financial analysis for a new investment.",
      "Generate a budget breakdown for the year.",
      "Write a financial report for Q1.",
      "Create a financial analysis for a new investment.",
      "Generate a budget breakdown for the year.",
    ],
    Marketing: [
      "Write a blog post on the importance of SEO.",
      "Create an ad copy for a new marketing campaign.",
      "Generate a content strategy for social media.",
      "Write a blog post on the importance of SEO.",
      "Create an ad copy for a new marketing campaign.",
      "Generate a content strategy for social media.",
      "Write a blog post on the importance of SEO.",
      "Create an ad copy for a new marketing campaign.",
      "Generate a content strategy for social media.",
    ],
    "Social Media": [
      "Write a post for LinkedIn on industry trends.",
      "Generate hashtags for an Instagram campaign.",
      "Create a social media calendar for the next month.",
      "Write a post for LinkedIn on industry trends.",
      "Generate hashtags for an Instagram campaign.",
      "Create a social media calendar for the next month.",
      "Write a post for LinkedIn on industry trends.",
      "Generate hashtags for an Instagram campaign.",
      "Create a social media calendar for the next month.",
    ],
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleButtonClick = (prompt: string) => {
    handlePromptButton(prompt);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-20">
      <div className="bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full   overflow-hidden flex border border-violet-500/30">
        {/* Left sidebar with category buttons */}
        <div className="w-1/3 bg-gray-950 p-6 flex flex-col gap-3">
          <h2 className="text-violet-300 font-semibold mb-4 text-xl">Categories</h2>
          {Object.keys(prompts).map((category) => (
            <Button
              key={category}
              className={`w-full py-3 text-left justify-start ${selectedCategory === category
                ? "bg-violet-700 text-white shadow-lg"
                : "bg-gray-800 text-gray-200 hover:bg-violet-600/40"
                } transition-all duration-200 font-medium`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Button>
          ))}
          <div className="mt-auto pt-6">
            <Button
              onClick={onClose}
              className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300"
            >
              Close
            </Button>
          </div>
        </div>

        {/* Main content area */}
        <div className="w-2/3 p-8 text-white h-96 overflow-y-scroll scroll-bar">
          {selectedCategory && (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className=" text-gray-300 text-lg font-bold ">
                  <span className="">Prompts</span>
                </h2>
              </div>

              <div className="space-y-3">
                {prompts[selectedCategory].map((prompt, index) => (
                  <div
                    key={index}
                    className="group"
                  >
                    <button
                      className="w-full flex items-center p-4 hover:bg-violet-800/30 bg-gray-800/60 text-gray-100 rounded-lg border border-violet-500/30 shadow-sm transition-all duration-200 text-left group-hover:border-violet-400/60"
                      onClick={() => handleButtonClick(prompt)}
                    >
                      <div className="mr-3 text-violet-400 opacity-70">
                        #{index + 1}
                      </div>
                      <span className="text-gray-100 group-hover:text-white">{prompt}</span>
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreBuildPrompt;