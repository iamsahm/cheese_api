const CheeseSchema = require("../models/cheese_display");
const CheeseCleaner = require("../middleware/CheeseCleaner");
const Cheese = require("../models/cheese");
const mongoose = require("mongoose");

const CheesesController = {
    Random: async (req, res) => {
        try {
            // const randomCheese = await Cheese.findRandom().limit(1).exec();
            const randomCheese = await Cheese.aggregate([
                { $sample: { size: 1 } },
            ]);
            //Randomly selects the specified number of documents from the input documents.
            if (!randomCheese) {
                res.status(404).json({
                    message: "The Cheese monger is empty!",
                });
            } else {
                res.status(200).json(randomCheese[0]);
                console.log(randomCheese[0]);
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Internal Server Error" });
        }
    },
    GetByType: async (req, res) => {
        const { type } = req.params;
        try {
            if (type === "all") {
                const all_cheese_results = await CheeseSchema.find({}).lean();
                const CheeseCleaners = all_cheese_results.map((cheese) => {
                    return new CheeseCleaner(cheese);
                });
                return res.status(200).json(CheeseCleaners);
            } else {
                const cheese_results = await CheeseSchema.find({
                    "attributes.types": type,
                }).lean();
                if (cheese_results.length === 0) {
                    return res.status(404).json("Cheese type not found");
                }
                const CheeseCleaners = cheese_results.map((cheese) => {
                    return new CheeseCleaner(cheese);
                });
                res.status(200).json(CheeseCleaners);
            }
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    CheeseById: async (req, res) => {
        const cheeseId = req.params.id;
        try {
            const cheese = await Cheese.findById(cheeseId).lean();
            if (!cheese) {
                res.status(404).json({ message: "Cheese not found" });
            } else {
                cleanCheese = new CheeseCleaner(cheese);
                res.status(200).json(cleanCheese);
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "server error" });
        }
    },
};

module.exports = CheesesController;
