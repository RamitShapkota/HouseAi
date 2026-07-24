import {
  Maximize2, BedDouble, Bath, Car, Trees, Clock, GraduationCap, Navigation, type LucideIcon,
} from "lucide-react";
import type { PropertyFormData } from "../types/prediction";

export const DEFAULT_FORM: PropertyFormData = {
  sqft: "", bedrooms: "3", bathrooms: "2", garage: "2",
  lotSize: "", age: "10", schoolRating: "8", distance: "5",
};

export interface FormFieldConfig {
  key: keyof PropertyFormData;
  label: string;
  icon: LucideIcon;
  placeholder: string;
}

export const FORM_FIELDS: FormFieldConfig[] = [
  { key: "sqft", label: "Square Footage", icon: Maximize2, placeholder: "e.g. 1800" },
  { key: "bedrooms", label: "Bedrooms", icon: BedDouble, placeholder: "3" },
  { key: "bathrooms", label: "Bathrooms", icon: Bath, placeholder: "2" },
  { key: "garage", label: "Garage Size", icon: Car, placeholder: "1-3 cars" },
  { key: "lotSize", label: "Lot Size (sq ft)", icon: Trees, placeholder: "e.g. 6000" },
  { key: "age", label: "House Age (years)", icon: Clock, placeholder: "e.g. 10" },
  { key: "schoolRating", label: "School Rating (1-10)", icon: GraduationCap, placeholder: "e.g. 8" },
  { key: "distance", label: "Distance to City (mi)", icon: Navigation, placeholder: "e.g. 5" },
];
