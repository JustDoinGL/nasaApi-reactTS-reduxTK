export interface ISearchPicturesFull {
  collection: Collection
}

export interface Collection {
  version: string
  href: string
  items: ISearchPictures[]
}

export interface ISearchPictures {
  href: string
  data: Daum[]
  links: Link[]
}

export interface Daum {
  center: string
  title: string
  nasa_id: string
  date_created: string
  keywords: string[]
  media_type: string
  description_508: string
  secondary_creator: string
  description: string
}

export interface Link {
  href: string
  rel: string
  render: string
}
