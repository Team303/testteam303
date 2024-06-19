import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { motion } from "framer-motion";

export default function Bento() {
  const { toast } = useToast();
  return (
    <>
      <div className="flex flex-col gap-3 items-left">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="box rounded-full"
        >
          <Button
            variant="secondary"
            className="text-left w-full border-2 border-[#AAAAAA1A] bg-[#AAAAAA1a] p-12 text-[#729AA9] hover:bg-[#AAAAAA2a]"
            onClick={() => {
              navigator.clipboard.writeText(
                "Team 303 RAMP, Inc P.O. Box 8113 Bridgewater, NJ 08807"
              );
              toast({
                description: "Copied to clipboard",
              });
            }}
          >
            <div className="flex flex-col">
              <h1 className="">Mail</h1>
              <p className="italic text-xs mt-2">
                Team 303 RAMP, Inc P.O. Box 8113 Bridgewater, NJ 08807
              </p>
            </div>
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="box rounded-full"
        >
          <Button
            variant="secondary"
            className="text-left w-full border-2 border-[#AAAAAA1A] bg-[#AAAAAA1a] p-12 text-[#729AA9] hover:bg-[#AAAAAA2a]"
            onClick={() => {
              navigator.clipboard.writeText("outreach@team303.com");
              toast({
                description: "Copied to clipboard",
              });
            }}
          >
            <div className="flex flex-col">
              <h1 className="">Email</h1>
              <p className="italic text-xs mt-2">outreach@team303.com</p>
            </div>
          </Button>
        </motion.div>
      </div>
    </>
  );
}
