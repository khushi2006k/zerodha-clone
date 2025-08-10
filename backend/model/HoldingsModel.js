const { model } = require("mongoose");
const { HoldingsSchema } = require("../schemas/HoldingsSchema");

// ✅ No "new" before model()
const HoldingsModel = model("holding", HoldingsSchema);

module.exports = { HoldingsModel };
