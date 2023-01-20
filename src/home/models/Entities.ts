export interface ExtendedEntities {
  media: Media[];
}

export interface Media {
  media_url_https: string;
  type: string;
  sizes: Sizes;
  video_info: VideoInfo | null;
}

export interface Sizes {
  small: SmallSize;
}

export interface SmallSize {
  w: number;
  h: number;
}

export interface VideoInfo {
  variants: VideoVariants[];
}

export interface VideoVariants {
  bitrate: number | null;
  content_type: string | null;
  url: string;
}
