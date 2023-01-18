export type HomeTimeline = Tweet[];

export interface Tweet {
  created_at: string;
  id: number;
  id_str: string;
  text: string;
  truncated: boolean;
  entities: Entities;
  extended_entities?: ExtendedEntities;
  source: string;
  in_reply_to_status_id?: number;
  in_reply_to_status_id_str?: string;
  in_reply_to_user_id?: number;
  in_reply_to_user_id_str?: string;
  in_reply_to_screen_name?: string;
  user: User;
  geo: any;
  coordinates: any;
  place: any;
  contributors: any;
  is_quote_status: boolean;
  retweet_count: number;
  favorite_count: number;
  favorited: boolean;
  retweeted: boolean;
  possibly_sensitive?: boolean;
  possibly_sensitive_appealable?: boolean;
  lang: string;
  retweeted_status?: RetweetedStatus;
  quoted_status_id?: number;
  quoted_status_id_str?: string;
  quoted_status?: QuotedStatus2;
}

export interface Entities {
  hashtags: Hashtag[];
  symbols: any[];
  user_mentions: UserMention[];
  urls: Url[];
  media?: Medum[];
}

export interface Hashtag {
  text: string;
  indices: number[];
}

export interface UserMention {
  screen_name: string;
  name: string;
  id: number;
  id_str: string;
  indices: number[];
}

export interface Url {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
}

export interface Medum {
  id: number;
  id_str: string;
  indices: number[];
  media_url: string;
  media_url_https: string;
  url: string;
  display_url: string;
  expanded_url: string;
  type: string;
  sizes: Sizes;
  source_status_id?: number;
  source_status_id_str?: string;
  source_user_id?: number;
  source_user_id_str?: string;
}

export interface Sizes {
  thumb: Thumb;
  small: Small;
  medium: Medium;
  large: Large;
}

export interface Thumb {
  w: number;
  h: number;
  resize: string;
}

export interface Small {
  w: number;
  h: number;
  resize: string;
}

export interface Medium {
  w: number;
  h: number;
  resize: string;
}

export interface Large {
  w: number;
  h: number;
  resize: string;
}

export interface ExtendedEntities {
  media: Medum2[];
}

export interface Medum2 {
  id: number;
  id_str: string;
  indices: number[];
  media_url: string;
  media_url_https: string;
  url: string;
  display_url: string;
  expanded_url: string;
  type: string;
  sizes: Sizes2;
  source_status_id?: number;
  source_status_id_str?: string;
  source_user_id?: number;
  source_user_id_str?: string;
  video_info?: VideoInfo;
  additional_media_info?: AdditionalMediaInfo;
}

export interface Sizes2 {
  thumb: Thumb2;
  small: Small2;
  medium: Medium2;
  large: Large2;
}

export interface Thumb2 {
  w: number;
  h: number;
  resize: string;
}

export interface Small2 {
  w: number;
  h: number;
  resize: string;
}

export interface Medium2 {
  w: number;
  h: number;
  resize: string;
}

export interface Large2 {
  w: number;
  h: number;
  resize: string;
}

export interface VideoInfo {
  aspect_ratio: number[];
  duration_millis: number;
  variants: Variant[];
}

export interface Variant {
  bitrate?: number;
  content_type: string;
  url: string;
}

export interface AdditionalMediaInfo {
  monetizable: boolean;
  source_user: SourceUser;
}

export interface SourceUser {
  id: number;
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  description: string;
  url: string;
  entities: Entities2;
  protected: boolean;
  followers_count: number;
  friends_count: number;
  listed_count: number;
  created_at: string;
  favourites_count: number;
  utc_offset: any;
  time_zone: any;
  geo_enabled: boolean;
  verified: boolean;
  statuses_count: number;
  lang: any;
  contributors_enabled: boolean;
  is_translator: boolean;
  is_translation_enabled: boolean;
  profile_background_color: string;
  profile_background_image_url: any;
  profile_background_image_url_https: any;
  profile_background_tile: boolean;
  profile_image_url: string;
  profile_image_url_https: string;
  profile_banner_url: string;
  profile_link_color: string;
  profile_sidebar_border_color: string;
  profile_sidebar_fill_color: string;
  profile_text_color: string;
  profile_use_background_image: boolean;
  has_extended_profile: boolean;
  default_profile: boolean;
  default_profile_image: boolean;
  following: boolean;
  follow_request_sent: boolean;
  notifications: boolean;
  translator_type: string;
  withheld_in_countries: any[];
}

export interface Entities2 {
  url: Url2;
  description: Description;
}

export interface Url2 {
  urls: Url3[];
}

export interface Url3 {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
}

export interface Description {
  urls: any[];
}

export interface User {
  id: number;
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  description: string;
  url?: string;
  entities: Entities3;
  protected: boolean;
  followers_count: number;
  friends_count: number;
  listed_count: number;
  created_at: string;
  favourites_count: number;
  utc_offset: any;
  time_zone: any;
  geo_enabled: boolean;
  verified: boolean;
  statuses_count: number;
  lang: any;
  contributors_enabled: boolean;
  is_translator: boolean;
  is_translation_enabled: boolean;
  profile_background_color: string;
  profile_background_image_url?: string;
  profile_background_image_url_https?: string;
  profile_background_tile: boolean;
  profile_image_url: string;
  profile_image_url_https: string;
  profile_banner_url: string;
  profile_link_color: string;
  profile_sidebar_border_color: string;
  profile_sidebar_fill_color: string;
  profile_text_color: string;
  profile_use_background_image: boolean;
  has_extended_profile: boolean;
  default_profile: boolean;
  default_profile_image: boolean;
  following: boolean;
  follow_request_sent: boolean;
  notifications: boolean;
  translator_type: string;
  withheld_in_countries: any[];
}

export interface Entities3 {
  description: Description2;
  url?: Url5;
}

export interface Description2 {
  urls: Url4[];
}

export interface Url4 {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
}

export interface Url5 {
  urls: Url6[];
}

export interface Url6 {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
}

export interface RetweetedStatus {
  created_at: string;
  id: number;
  id_str: string;
  text: string;
  truncated: boolean;
  entities: Entities4;
  source: string;
  in_reply_to_status_id: any;
  in_reply_to_status_id_str: any;
  in_reply_to_user_id: any;
  in_reply_to_user_id_str: any;
  in_reply_to_screen_name: any;
  user: User2;
  geo: any;
  coordinates: any;
  place: any;
  contributors: any;
  is_quote_status: boolean;
  quoted_status_id?: number;
  quoted_status_id_str?: string;
  quoted_status?: QuotedStatus;
  retweet_count: number;
  favorite_count: number;
  favorited: boolean;
  retweeted: boolean;
  possibly_sensitive?: boolean;
  possibly_sensitive_appealable?: boolean;
  lang: string;
  extended_entities?: ExtendedEntities2;
}

export interface Entities4 {
  hashtags: Hashtag2[];
  symbols: any[];
  user_mentions: UserMention2[];
  urls: Url7[];
  media?: Medum3[];
}

export interface Hashtag2 {
  text: string;
  indices: number[];
}

export interface UserMention2 {
  screen_name: string;
  name: string;
  id: number;
  id_str: string;
  indices: number[];
}

export interface Url7 {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
}

export interface Medum3 {
  id: number;
  id_str: string;
  indices: number[];
  media_url: string;
  media_url_https: string;
  url: string;
  display_url: string;
  expanded_url: string;
  type: string;
  sizes: Sizes3;
}

export interface Sizes3 {
  thumb: Thumb3;
  medium: Medium3;
  large: Large3;
  small: Small3;
}

export interface Thumb3 {
  w: number;
  h: number;
  resize: string;
}

export interface Medium3 {
  w: number;
  h: number;
  resize: string;
}

export interface Large3 {
  w: number;
  h: number;
  resize: string;
}

export interface Small3 {
  w: number;
  h: number;
  resize: string;
}

export interface User2 {
  id: number;
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  description: string;
  url: string;
  entities: Entities5;
  protected: boolean;
  followers_count: number;
  friends_count: number;
  listed_count: number;
  created_at: string;
  favourites_count: number;
  utc_offset: any;
  time_zone: any;
  geo_enabled: boolean;
  verified: boolean;
  statuses_count: number;
  lang: any;
  contributors_enabled: boolean;
  is_translator: boolean;
  is_translation_enabled: boolean;
  profile_background_color: string;
  profile_background_image_url?: string;
  profile_background_image_url_https?: string;
  profile_background_tile: boolean;
  profile_image_url: string;
  profile_image_url_https: string;
  profile_banner_url: string;
  profile_link_color: string;
  profile_sidebar_border_color: string;
  profile_sidebar_fill_color: string;
  profile_text_color: string;
  profile_use_background_image: boolean;
  has_extended_profile: boolean;
  default_profile: boolean;
  default_profile_image: boolean;
  following: boolean;
  follow_request_sent: boolean;
  notifications: boolean;
  translator_type: string;
  withheld_in_countries: any[];
}

export interface Entities5 {
  url: Url8;
  description: Description3;
}

export interface Url8 {
  urls: Url9[];
}

export interface Url9 {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
}

export interface Description3 {
  urls: Url10[];
}

export interface Url10 {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
}

export interface QuotedStatus {
  created_at: string;
  id: number;
  id_str: string;
  text: string;
  truncated: boolean;
  entities: Entities6;
  source: string;
  in_reply_to_status_id: any;
  in_reply_to_status_id_str: any;
  in_reply_to_user_id: any;
  in_reply_to_user_id_str: any;
  in_reply_to_screen_name: any;
  user: User3;
  geo: any;
  coordinates: any;
  place: any;
  contributors: any;
  is_quote_status: boolean;
  retweet_count: number;
  favorite_count: number;
  favorited: boolean;
  retweeted: boolean;
  possibly_sensitive: boolean;
  possibly_sensitive_appealable: boolean;
  lang: string;
}

export interface Entities6 {
  hashtags: any[];
  symbols: any[];
  user_mentions: UserMention3[];
  urls: Url11[];
}

export interface UserMention3 {
  screen_name: string;
  name: string;
  id: number;
  id_str: string;
  indices: number[];
}

export interface Url11 {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
}

export interface User3 {
  id: number;
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  description: string;
  url: string;
  entities: Entities7;
  protected: boolean;
  followers_count: number;
  friends_count: number;
  listed_count: number;
  created_at: string;
  favourites_count: number;
  utc_offset: any;
  time_zone: any;
  geo_enabled: boolean;
  verified: boolean;
  statuses_count: number;
  lang: any;
  contributors_enabled: boolean;
  is_translator: boolean;
  is_translation_enabled: boolean;
  profile_background_color: string;
  profile_background_image_url: string;
  profile_background_image_url_https: string;
  profile_background_tile: boolean;
  profile_image_url: string;
  profile_image_url_https: string;
  profile_banner_url: string;
  profile_link_color: string;
  profile_sidebar_border_color: string;
  profile_sidebar_fill_color: string;
  profile_text_color: string;
  profile_use_background_image: boolean;
  has_extended_profile: boolean;
  default_profile: boolean;
  default_profile_image: boolean;
  following: boolean;
  follow_request_sent: boolean;
  notifications: boolean;
  translator_type: string;
  withheld_in_countries: any[];
}

export interface Entities7 {
  url: Url12;
  description: Description4;
}

export interface Url12 {
  urls: Url13[];
}

export interface Url13 {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
}

export interface Description4 {
  urls: any[];
}

export interface ExtendedEntities2 {
  media: Medum4[];
}

export interface Medum4 {
  id: number;
  id_str: string;
  indices: number[];
  media_url: string;
  media_url_https: string;
  url: string;
  display_url: string;
  expanded_url: string;
  type: string;
  sizes: Sizes4;
}

export interface Sizes4 {
  thumb: Thumb4;
  medium: Medium4;
  large: Large4;
  small: Small4;
}

export interface Thumb4 {
  w: number;
  h: number;
  resize: string;
}

export interface Medium4 {
  w: number;
  h: number;
  resize: string;
}

export interface Large4 {
  w: number;
  h: number;
  resize: string;
}

export interface Small4 {
  w: number;
  h: number;
  resize: string;
}

export interface QuotedStatus2 {
  created_at: string;
  id: number;
  id_str: string;
  text: string;
  truncated: boolean;
  entities: Entities8;
  source: string;
  in_reply_to_status_id: number;
  in_reply_to_status_id_str: string;
  in_reply_to_user_id: number;
  in_reply_to_user_id_str: string;
  in_reply_to_screen_name: string;
  user: User4;
  geo: any;
  coordinates: any;
  place: any;
  contributors: any;
  is_quote_status: boolean;
  retweet_count: number;
  favorite_count: number;
  favorited: boolean;
  retweeted: boolean;
  lang: string;
}

export interface Entities8 {
  hashtags: any[];
  symbols: any[];
  user_mentions: any[];
  urls: Url14[];
}

export interface Url14 {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
}

export interface User4 {
  id: number;
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  description: string;
  url: any;
  entities: Entities9;
  protected: boolean;
  followers_count: number;
  friends_count: number;
  listed_count: number;
  created_at: string;
  favourites_count: number;
  utc_offset: any;
  time_zone: any;
  geo_enabled: boolean;
  verified: boolean;
  statuses_count: number;
  lang: any;
  contributors_enabled: boolean;
  is_translator: boolean;
  is_translation_enabled: boolean;
  profile_background_color: string;
  profile_background_image_url: string;
  profile_background_image_url_https: string;
  profile_background_tile: boolean;
  profile_image_url: string;
  profile_image_url_https: string;
  profile_banner_url: string;
  profile_link_color: string;
  profile_sidebar_border_color: string;
  profile_sidebar_fill_color: string;
  profile_text_color: string;
  profile_use_background_image: boolean;
  has_extended_profile: boolean;
  default_profile: boolean;
  default_profile_image: boolean;
  following: boolean;
  follow_request_sent: boolean;
  notifications: boolean;
  translator_type: string;
  withheld_in_countries: any[];
}

export interface Entities9 {
  description: Description5;
}

export interface Description5 {
  urls: any[];
}
