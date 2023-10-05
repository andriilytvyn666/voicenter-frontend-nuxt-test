type ResponseBody = {
  data: {
    siteData: {
      testTaskTemplate_30_15673: {
        testTaskHeaderTitle: string
        testTaskHeaderImageAltText: string
        testTaskHeaderSubtitle: string
        testTaskHeaderText: string
        testTaskHeaderImage: string
        testTaskSlidesBlockSlides: string
        testTaskSlidesBlockTitle: string
        testTaskSecondBlockTitle: string
        testTaskSecondBlockSideNavigationTitle: string

        testTaskSlidesBlockSubtitle: string // unused

        testTaskSecondDescriptiveBlockItems: string

        sort: number
        createDate: string
        publishDate: string
        ID: number
        ContentType: string
        jpath: string
        url: string
        children: object
      }
    }
  }
}

type Slide = {
  key: string
  name: string
  ncContentTypeAlias: string
  title: string
  subtitle: string
  buttonLink: string
  buttonText: string
  description: string
  image: string
  imageAlt: string
}

type Item = {
  key: string
  buttonLink: string
  buttonText: string
  image: string
  imageAltAtr: string
  name: string
  ncContectTypeAlias: string
  subtitle: string
  text: string
  title: string
}
