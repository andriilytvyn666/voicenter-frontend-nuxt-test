type ResponseBody = {
  data: {
    siteData: {
      testTaskTemplate_30_15673: {
        testTaskHeaderTitle: string
        testTaskHeaderImageAltText: string
        testTaskSlidesBlockTitle: string
        testTaskSlidesBlockSubtitle: string
        testTaskSecondBlockTitle: string
        testTaskSecondBlockSideNavigationTitle: string
        testTaskHeaderSubtitle: string
        testTaskHeaderText: string
        testTaskHeaderImage: string
        testTaskSlidesBlockSlides: string
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
