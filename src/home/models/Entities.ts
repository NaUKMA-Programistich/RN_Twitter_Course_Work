export interface ExtendedEntities {
  media: Media[];
}

export interface Media {
  id: number;
  id_str: string;
  media_url: string;
  media_url_https: string;
  url: string;
  display_url: string;
  expanded_url: string;
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
  aspect_ratio: number[];
  variants: VideoVariants[];
}

export interface VideoVariants {
  bitrate: number | null;
  content_type: string | null;
  url: string;
}
