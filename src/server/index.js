const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
