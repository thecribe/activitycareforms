"use strict";

import { sequelize } from "@/dbConfig";
const { Sequelize, DataTypes } = require("sequelize");

export const Entries = sequelize.define(
  "entries",
  {
    entryId: {
      allowNull: false,
      type: Sequelize.STRING,
      primaryKey: true,
    },
    entry: Sequelize.TEXT,
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  },
  {}
);
