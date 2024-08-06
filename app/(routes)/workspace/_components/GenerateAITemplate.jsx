import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { chatSession } from "@/config/GoogleAIModel";
import { Loader2Icon } from "lucide-react";

function GenerateAITemplate({setGenerateAIOutput}) {
  const [open, setOpen] = useState(false);
  const [userInput, setUserInput] = useState();
  const [loading, setLoading] = useState(false);

  const GenerateFromAI = async () => {
    setLoading(true);
    const PROMPT = "generate template for editor.js in for" + userInput;
    const result = await chatSession.sendMessage(PROMPT);
    console.log(result.response.text());
    try {
      const output = JSON.parse(result.response.text())
      setGenerateAIOutput(output);
    } catch (error) {
      setLoading(false);
    }
    
    setLoading(false);
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outline"
        className="flex gap-2"
        onClick={() => setOpen(true)}
      >
        Generate from AI
      </Button>
      <Dialog open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Generate AI Template</DialogTitle>
            <DialogDescription>
              <h2 className="mt-5">What you want to write in document</h2>
              <Input placehoder="Ex. Project Idea" 
                onChange={(event) =>setU}
              />
              <div className="flex items-center justify-end gap-5 mt-5">
                <Button variant="ghost" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button
                  disabled={!userInput || loading}
                  onClick={() => GenerateFromAI()}
                >
                  {loading ? (
                    <Loader2Icon className="animate-spin" />
                  ) : (
                    "Generate"
                  )}
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default GenerateAITemplate;
