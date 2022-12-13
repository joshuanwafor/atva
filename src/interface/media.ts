export type Image = {
  original: string;
  url: string;
  extraLarge?: string;
  large?: string;
  medium?: string;
  small?: string;
  source?: {
    type: string;
    id: string;
  };
};

export type CloudinarySignedData = {
  timestamp: number;
  public_id: string;
  signature: string; //Sha1
};

export type UploadedItem = {
  url?: string;
  sourceId?: string;
  source?: string;
};
