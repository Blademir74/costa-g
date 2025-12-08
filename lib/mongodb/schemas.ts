import mongoose, { Schema, Document, Model } from 'mongoose';

// -----------------------------------------------------------------------------
// 1. Configuraciones Globales (Flexible Content)
// -----------------------------------------------------------------------------
export interface ISettings extends Document {
  siteName: string;
  companyInfo: {
    address: string;
    phone: string;
    email: string;
  };
  socialNetworks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  schedules: Record<string, string>; // e.g. { "weekdays": "9am-6pm", "saturday": "9am-2pm" }
  activeBanners: boolean;
}

const SettingsSchema = new Schema<ISettings>({
  siteName: { type: String, required: true, default: 'COSTA G' },
  companyInfo: {
    address: String,
    phone: String,
    email: String
  },
  socialNetworks: {
    facebook: String,
    instagram: String,
    linkedin: String
  },
  schedules: { type: Map, of: String },
  activeBanners: { type: Boolean, default: true }
}, { timestamps: true });

// -----------------------------------------------------------------------------
// 2. Testimonios (Social Proof)
// -----------------------------------------------------------------------------
export interface ITestimonial extends Document {
  clientName: string;
  company?: string;
  comment: string;
  rating: number; // 1-5
  photoUrl?: string;
  isFeatured: boolean;
}

const TestimonialSchema = new Schema<ITestimonial>({
  clientName: { type: String, required: true },
  company: { type: String },
  comment: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  photoUrl: { type: String },
  isFeatured: { type: Boolean, default: false }
}, { timestamps: true });

// Prevent model recompilation in serverless environments
export const SettingsModel: Model<ISettings> = mongoose.models.Settings || mongoose.model<ISettings>('Settings', SettingsSchema);
export const TestimonialModel: Model<ITestimonial> = mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);