import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to Little Lemon
        </h1>
        <p className="text-lg text-gray-700 mt-2">
          Your go-to place for fresh and delicious meals.
        </p>
      </motion.div>

      <Card className="mt-6 p-6 shadow-lg rounded-2xl bg-white max-w-lg text-center">
        <CardContent>
          <p className="text-gray-600 text-lg">
            Explore our menu, book a table, or learn more about us.
          </p>
          <div className="mt-4 flex gap-4 justify-center">
            <Button variant="default">View Menu</Button>
            <Button variant="outline">Book a Table</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
