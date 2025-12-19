import { useState } from "react";
import Icon from "@/components/ui/icon";

interface AccordionItemProps {
  question: string;
  answer: string;
}

interface SimpleAccordionProps {
  items: AccordionItemProps[];
}

const SimpleAccordion = ({ items }: SimpleAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-card border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between p-6 text-left font-semibold hover:text-primary transition-colors"
          >
            <span>{item.question}</span>
            <Icon
              name="ChevronDown"
              size={20}
              className={`transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6 text-muted-foreground">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SimpleAccordion;
