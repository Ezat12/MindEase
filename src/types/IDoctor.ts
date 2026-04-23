export type IDoctor = {
  id: string;
  fullName: string;
  email: string;
  gender: number;
  age: number;
  specialization: string;
  bio: string;
  profilePicture: string;

  rating: number;
  ratingCount: number;
  priceEGP: number;
  languages: string[];
  nextAvailable: string;
  tags: string[];
  verified: boolean;
};
