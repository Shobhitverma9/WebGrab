import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ISettings extends Document {
  closedDates: string[]; // Array of YYYY-MM-DD strings
  closedDaysOfWeek: number[]; // Array of numbers (0 = Sunday, 1 = Monday, etc.)
  createdAt: Date;
  updatedAt: Date;
}

const SettingsSchema: Schema<ISettings> = new Schema(
  {
    closedDates: { type: [String], default: [] },
    closedDaysOfWeek: { type: [Number], default: [] },
  },
  {
    timestamps: true,
  }
);

// We'll just have one global settings document
export const Settings: Model<ISettings> =
  mongoose.models.Settings || mongoose.model<ISettings>('Settings', SettingsSchema);
